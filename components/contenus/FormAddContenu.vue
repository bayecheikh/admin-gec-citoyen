<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Titre *"
            outlined dense
            v-model="model.titre"
            :rules="rules.textRules"
          ></v-text-field>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea
            label="Résumé *"
            outlined dense
            v-model="model.resume"
            :rules="rules.textRules"
          ></v-textarea>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <p>Body *</p>
          <template>
            <ClientOnly>
              <!-- Use the component in the right place of the template -->
              <tiptap-vuetify v-model="model.body" :extensions="extensions" :card-props="{ flat: false, color: '' }"/>
            </ClientOnly>
          </template>
        </v-col>
        <v-col
        lg="6"
        md="6"
        sm="12"
        >
          <v-autocomplete
              v-model="model.categories"
              :items="listcategories"
              :rules="rules.categoriesRules"
              outlined
              dense
              small-chips
              label="Categorie"
              item-text="libelle"
              item-value="id"
              return-object
              @change="changeCategorie"
            >
          </v-autocomplete>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Lien externe (optionel)"
            outlined dense
            v-model="model.lien"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row  class="mb-6">
        <v-col md="6" lg="6" sm="12">
            <v-flex>
              <v-btn
                color="grey"
                class="white--text"
                @click="$refs.file.click()"
                depressed
              >
                Image
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </v-flex>
            <v-flex>{{filename}}</v-flex>
            <input
              type="file"
              id="file"
              name="futured_image"
              ref="file"
              v-on:change="handleFileUpload"
              style="display: none"
            />
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
    },
    computed: {
      ...mapGetters({
      listcategories: 'categories/listcategories',
    })},
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
      filename : '',
      model: {
        futured_image:'',
        titre: '',
        resume: '',
        body: ``,
        categories: [],
        categorie:'',
        id_categorie:'',
        lien:''
      },
      rules:{
        textRules: [
          v => !!v || 'Libelle est obligatoire',
          v => !!v || 'Contenu obligatoire',
        ],
        descriptionRules: [
          v => !!v || 'Description est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm () {
        let validation = this.$refs.form.validate()
        this.loading = true;
        /* console.log('Donées formulaire++++++: ',{...this.model,categories:selectedcategories,...this.model.futured_image}) */


        let formData = new FormData();
        formData.append("futured_image", this.model.futured_image);
        formData.append("titre", this.model.titre );
        formData.append("resume", this.model.resume );
        formData.append("body", this.model.body);
        formData.append("id_categorie", this.model.id_categorie);
        formData.append("categories", [this?.model?.categories]?.map((item)=>{return item.id}));
        formData.append("categorie", this.sanitizeTitle(this.model.categorie));
        formData.append("slug", this.sanitizeTitle(this.model.titre));
        formData.append("lien", this.sanitizeTitle(this.model.lien));

        console.log('donnee envoyées++++++++++++++',this.model)

       validation && this.$msasFileApi.post('/contenus',formData)
          .then((res) => {
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            
            if(this.$route.path=='/contenus/addContenu'){
            this.$router.push('/contenus');
            }
            else
            this.$store.dispatch('contenus/getSelectList')
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
      },
      async changeCategorie(value) {
        console.log("id categorie : ++++++++++++ ",value)
        this.model.categorie = value.libelle
        this.model.categories = value

        //this.selectedRegions.push(value.id)
        
      },
    }
  }
</script>
<style>
.v-toolbar__content {
  height: 67px;
  box-shadow: 0px 0px 0px 0px !important;
}
</style>