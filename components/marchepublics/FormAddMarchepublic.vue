<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Référence"
            outlined dense
            v-model="model.reference"
            :rules="rules.textRules"
          ></v-text-field>
        </v-col>

        <v-col md="12" lg="12" sm="12">
          <h3>Objet</h3> 
          <template>
            <ClientOnly>
              <!-- Use the component in the right place of the template -->
              <tiptap-vuetify v-model="model.objet" :extensions="extensions" :card-props="{ flat: false, color: '' }"/>
            </ClientOnly>
          </template>
        </v-col>
        <v-col md="4" lg="4" sm="12">
          <v-select
            :items="itemsTypeMarches"
            v-model="model.type_marche"
            label="Type de marché"
            item-text="libelle"
            item-value="libelle"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col lg="4" sm="12" md="4">
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.date_publication"
                label="Date publication"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="model.date_publication"
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col lg="4" sm="12" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="model.date_limite"
                label="Date limite"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="model.date_limite"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Lien externe"
            outlined dense
            v-model="model.lien"
          ></v-text-field>
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
        <v-col md="6" lg="6" sm="12">
            <v-flex>
              <v-btn
                color="grey"
                class="white--text"
                @click="$refs.file.click()"
                depressed
              >
                Joindre fichier
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
      itemsTypeMarches:[{id:'Travaux',libelle:'Travaux'},
        {id:'Fournitures',libelle:'Fournitures'},
        {id:'Services',libelle:'Services'},
        {id:'Prestations intellectuelles',libelle:'Prestations intellectuelles'}
      ],
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
        reference: '',
        objet: '',
        type_marche: '',
        categorie: '',
        date_publication: '',
        date_limite: '',
        futured_image: '',
        lien: '',
        categories: []
      },
      rules:{
        textRules: [
          v => !!v || 'Libelle est obligatoire',
          v => !!v || 'contenu obligatoire',
        ],
        descriptionRules: [
          v => !!v || 'Description est obligatoire'
        ],
      },
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
    }),
    methods: {
      submitForm () {
        let validation = this.$refs.form.validate()
        this.loading = true;
        /* console.log('Donées formulaire++++++: ',{...this.model,categories:selectedcategories,...this.model.futured_image}) */


        let formData = new FormData();
        formData.append("futured_image", this.model.futured_image);
        formData.append("reference", this.model.reference);
        formData.append("objet", this.model.objet );
        formData.append("type_marche", this.model.type_marche);
        formData.append("categorie", this.sanitizeTitle(this.model.categorie));
        formData.append("date_publication", this.model.date_publication);
        formData.append("date_limite", this.model.date_limite);
        formData.append("lien", this.model.lien);
        formData.append("categories", [this?.model?.categories]?.map((item)=>{return item.id}));

        console.log('donnee envoyées++++++++++++++',this.model)

       validation && this.$msasFileApi.post('/marchepublics',formData)
          .then((res) => {
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            
            if(this.$route.path=='/marchepublics/addMarchepublic'){
            this.$router.push('/marchepublics');
            }
            else
            this.$store.dispatch('marchepublics/getSelectList')
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
        console.log("id categorie : ",value.id)
        this.model.categorie = value.libelle
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