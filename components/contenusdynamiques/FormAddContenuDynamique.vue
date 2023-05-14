<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Titre *"
            outlined dense
            v-model="model.title"
            :rules="rules.titreRules"
          ></v-text-field>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea
            label="Résumé"
            outlined dense
            v-model="model.resume"
            :rules="rules.resumeRules"
          ></v-textarea>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <p>Body</p>
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
              v-model="selected"
              :items="listcontenuscategories"
              :rules="rules.categoriesRules"
              outlined
              dense
              small-chips
              label="Catégorie"
              item-text="libelle"
              item-value="id"
              return-object
              @change="changeCategorie"
            >
          </v-autocomplete>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-text-field
            label="Lien externe"
            outlined dense
            v-model="model.link"
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
        computed: mapGetters({
      listcontenuscategories: 'contenuscategories/listcontenuscategories',
      headers: 'contenuscategories/headercontenuscategories'
    }),
        mounted: function() {
         
         this.$store.dispatch('contenuscategories/getList')
        },
    
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
            selected: {},
          loading: false,
          message:null,
          color:null,
          valid: true,
          showCategorie: false,
          message:null,
          model: {
      
        title: '',
        resume: '',
        body: ``,
        categories: [],
        categorie:'',
        id_categorie:'',
        link:''
      },
      rules:{
        titreRules: [
          v => !!v || 'Le titre est obligatoire',
       
        ],
        descriptionRules: [
          v => !!v || 'Description est obligatoire'
        ],
      },
    
          imageData:null,
        }),
        methods: {
      
          async changeCategorie(value) {
        console.log("id categorie : ++++++++++++ ",value)
        // this.model.categorie = value.libelle
        this.model.categorie = value.id

 
        
      },
          submitForm () {
       
        console.log('Données formulaire contenus Catégorie ++++++ : ',{...this.model})
            let validation = this.$refs.form.validate()
          
            this.loading = true;
    
            validation && this.$gecApi.post('/contenus/', {...this.model})
              .then((res) => {
                this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
                this.$router.push('/contenusdynamiques');
              })
              .catch((error) => {
                  console.log('Code error ++++++: ', error)
                  this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de la création '})
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
       
          },
        metaInfo () {
          return {
            items: this.items,
          }
        }
      }
    </script>
    