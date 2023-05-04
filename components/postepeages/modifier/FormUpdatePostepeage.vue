<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Titre"
            outlined dense
            v-model="model.titre"
            :rules="rules.textRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Latitude"
            outlined dense
            v-model="model.latitude"
            :rules="rules.textRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Longitude"
            outlined dense
            v-model="model.longitude"
            :rules="rules.textRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
      :loading="loading"
        :disabled="!valid"
        depressed
        class="mr-4 text-white" color="#1B73E8"
        @click="submitForm"
      >
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import { mapMutations, mapGetters } from 'vuex'
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'
  export default {
    components: {
      TiptapVuetify
    },
    mounted: function() {
      this.$store.dispatch('categories/getList')
      this.getDetail(this.$nuxt._route.params.id)
    },
    computed: mapGetters({
      detailpostepeage:'postepeages/detailpostepeage',
      listcategories: 'categories/listcategories',
    }),
    data: () => ({
      extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
      ],
      loading: false,
      message:null,
      color:null,
      valid: true,
      selectedItem: 0,
      valid: true,
      filename:'',
      model: {
        id:'',
        futured_image:'',
        titre: '',
        latitude: '',
        longitude: '',
        resume: '',
        body: '',
        categories: [],
        id_categorie:''
      },
      rules:{
        textRules: [
          v => !!v || 'Prénom est obligatoire',
          v => !!v || 'postepeage obligatoire',
        ],
        descriptionRules: [
          v => !!v || 'Description est obligatoire'
        ],
      },
    }),
    methods: {
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/postepeages/'+id)
        .then(async (response) => {
            console.log('Detail postepeage ++++++++++',response.data)
            this.$store.dispatch('postepeages/getDetail',response.data)
            this.model.titre= response.data.titre
            this.model.id= response.data.id
            this.model.latitude= response.data.latitude
            this.model.longitude= response.data.longitude       
            //this.SelectedSource_financements= response.data.source_financements[0]
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
      submitForm () {
        let validation = this.$refs.form.validate()
        this.loading = true;
        /* console.log('Donées formulaire++++++: ',{...this.model,categories:selectedcategories,...this.model.futured_image}) */


        let formData = new FormData();
        formData.append("titre", this.model.titre );
        formData.append("latitude", this.model.latitude );
        formData.append("longitude", this.model.longitude );
        formData.append("slug", this.sanitizeTitle(this.model.titre));
        formData.append("id", this.model.id);
        formData.append("_method", "put");
        

        console.log('donnee envoyées++++++++++++++',this.model)

        
        validation && this.$msasFileApi.post('/postepeages/'+this.model.id, formData)
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Mofication réussie'})
            this.$router.push('/postepeages');
            console.log('donnee recu modifie ++++++++++++++',res)
          })
          .catch((error) => {
               console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requette envoyé ')
        });
      },
      resetForm () {
        this.$refs.form.reset()
      },
      resetValidationForm () {
        this.$refs.form.resetValidation()
      },
      handleFileUpload(e){
        //Recupère le fichier
        const input = this.$refs.file
        const files = input.files

        //Recupère l'extension
        let idxDot = files[0]?.name.lastIndexOf(".") + 1;
        let extFile = files[0]?.name.substr(idxDot, files[0].name.length).toLowerCase();
        let size = files[0]?.size/1024/1024 //La taille en Mbit
        console.log('Size-------------- ',size)
        if(files.length!=0){
          if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="pdf" || extFile=="doc" || extFile=="docx")){
            this.model.futured_image= files[0];
            this.filename = files[0].name
          }else{
            alert("Seul les fichiers jpg/jpeg/png/pdf/doc/docx et de taille inférieur à 5Mb sont acceptés!");
          }
        }
      },
      sanitizeTitle(title) {
        var slug = "";
        // Change to lower case
        var titleLower = title.toLowerCase();
        // Letter "e"
        slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
        // Letter "d"
        slug = slug.replace(/đ/gi, 'd');
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, '');
        // Change whitespace to "-"
        slug = slug.replace(/\s+/g, '-');
        slug = slug.replace(/'/g, '-');
        
        return slug;
      }
    }
  }
</script>