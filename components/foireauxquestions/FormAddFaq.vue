<template>
    <div>
      <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data"
        >
        <v-row>
  <v-col md="6" lg="6" sm="12">
    <v-textarea
      label="Question"
      outlined dense
      v-model="model.question"
      :rules="rules.questionRules"
    ></v-textarea>
  </v-col>
  <v-col md="6" lg="6" sm="12">
    <v-textarea
      label="Réponse"
      outlined dense
      v-model="model.response"
      :rules="rules.reponseRules"
    ></v-textarea>
  </v-col>
</v-row>
<v-row>
  <v-col md="12" lg="12" sm="12">
    <v-textarea
      label="Description"
      outlined dense
      v-model="model.description"
      :rules="rules.descriptionRules"
    ></v-textarea>
  </v-col>

</v-row>
<v-row>
    <v-col md="6" lg="6" sm="12">
        <v-autocomplete
  v-model="selected"
  :items="listfaqcategories"
  outlined
  dense
  small-chips
  label="Categorie"
  item-text="name"
  item-value="id"
  return-object
  @change="changeCategorie"
>
  <template v-slot:item="{ item }">
    <div>{{ item.name }}</div>
  </template>
</v-autocomplete>

     
  </v-col>
  <v-col md="6" lg="6" sm="12">
    
    <v-text-field
      label="Link"
      outlined dense
      v-model="model.link"
      :rules="rules.linkRules"
    ></v-text-field>
  </v-col>
</v-row>

    
        <v-btn
          :loading="loading"
          :disabled="!valid"
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
      export default {
 
        computed: mapGetters({
      listfaqcategories: 'faqcategories/listfaqcategories',
      headers: 'faqcategories/headerfaqcategories'
    }),
        mounted: function() {
         
         this.$store.dispatch('faqcategories/getList')
        },
    
        data: () => ({
            selected: {},
          loading: false,
          message:null,
          color:null,
          valid: true,
          showCategorie: false,
          message:null,
          model: {
            question: '',
            response: '',
            description: '',
            categorie: '',
            link: '',
            id:null,
            avatar:'',
            name: '',
            firstname: '',
            lastname: '',
            email: '',
            roles: null,
            categorie_id:null,
            country_code:'+221',
            telephone: '',
            adresse: '',
            fonction: '',
            categorie_id:null
          },
          rules:{
          questionRules: [
            (v) => !!v || 'L\'intitulé de la question est obligatoire',
            (v) => (v && v.length <= 50) || "L\'intitulé de la question ne doit pas dépasser 100 caractères",
            (v) => (v && v.length >= 2) || "L\'intitulé de la question doit contenir au moins 2 caractères"
          ],
          reponseRules: [
            (v) => !!v || 'La réponse est obligatoire',
            (v) => (v && v.length <= 500) || "La réponse ne doit pas dépasser 500 caractères",
            (v) => (v && v.length >= 2) || "La réponse doit contenir au moins 2 caractères"
          ],
       
          emailRules: [
            v => !!v || 'L\'adresse e-mail est obligatoire',
            v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
          ],
          usernameRules: [
            v => !!v || 'Login est obligatoire',
            v => (v && v.length <= 10) || 'Login doit être inférieur à 10 caractères',
          ],
          rolesRules: [
            v => (v && !!v.length) || 'Le rôle est obligatoire',
          ],
          telephoneRules: [
          (v) => !!v || 'Le numéro de téléphone est obligatoire',
          (v) => /^[0-9]+$/.test(v) || "Le numéro de téléphone ne doit contenir que des chiffres",
          (v) => (v && v.length >= 8 && v.length <= 20) || "Le numéro de téléphone doit contenir entre 8 et 20 chiffres"
          ],
          country_codeRules: [
            v => !!v || 'L\'indicatif du pays est obligatoire',
          ],
          fournisseur_services_idRules: [
            v => (!!v) || 'Fournisseur est obligatoire',
          ],
          structure_idRules: [
            v => (!!v) || 'Structure est obligatoire',
          ],
          adresseRules: [
            v => !!v || 'Adresse est obligatoire',
            v => (v && v.length <= 100) || 'Adresse doit être inférieur à 50 caractères',
          ],
          nationalityRules: [
            v => !!v || 'Nationalité est obligatoire',
            v => (v && v.length <= 50) || 'Nationalité doit être inférieur à 15 caractères',
          ],
          date_of_birthRules: [
            v => !!v || 'Date de naissance est obligatoire',
          ],
          place_of_birthRules: [
            v => !!v || 'Lieu de naissance est obligatoire',
            v => (v && v.length <= 50) || 'Lieu de naissance doit être inférieur à 50 caractères',
          ],
          /* sexeRules: [
            v => !!v || 'Civilité est obligatoire',
          ], */
          type_identificationRules: [
            v => !!v || 'Type d\'identification est obligatoire',
          ],
          numero_identificationRules: [
            v => !!v || 'Numéro d\'identification est obligatoire'
          ],
          fonctionRules: [
            v => !!v || 'Fonction est obligatoire'
          ]
        },
    
    
          imageData:null,
        }),
        methods: {
      
            async changeCategorie(value) {
        console.log("VALUEE : ++++++++++++ ",value)
        this.model.categorie = value.id
       

        //this.selectedRegions.push(value.id)
        
      },
          submitForm () {
       
        console.log('Données formulaire FAQ Catégorie ++++++ : ',{...this.model})
            let validation = this.$refs.form.validate()
          
            this.loading = true;
    
            validation && this.$gecApi.post('/faqs/', {...this.model})
              .then((res) => {
                this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
                this.$router.push('/foireauxquestions');
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
    