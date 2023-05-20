<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data"
      >
      <v-row>
<v-col md="6" lg="6" sm="12">
  <v-text-field
    label="Nom de l'instance"
    outlined dense
    v-model="model.name"
    :rules="rules.nameRules"
  ></v-text-field>
</v-col>
<v-col md="6" lg="6" sm="12">
  <v-text-field
    label="Base URL"
    outlined dense
    v-model="model.baseUrl"
    :rules="rules.baseUrlRules"
  ></v-text-field>
</v-col>
</v-row>
      <v-row>
        <v-col md="6" lg="6" sm="12">
  <v-text-field
    label="Intitulé"
    outlined dense
    v-model="model.intitule"
    :rules="rules.intituleRules"
  ></v-text-field>
</v-col>
<v-col md="6" lg="6" sm="12">
  <v-autocomplete
  v-model="selected"
  :items="listorganismescategories"
  outlined
  dense
  small-chips
  label="Type de l'organisme"
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
      </v-row>


<v-row>
<v-col md="6" lg="6" sm="12">
  <v-text-field
    label="GEC"
    outlined dense
    v-model="model.gec"
    :rules="rules.gecRules"
  ></v-text-field>
</v-col>
<v-col md="6" lg="6" sm="12">
  <v-text-field
    label="GEC URL"
    outlined dense
    v-model="model.gecUrl"
    :rules="rules.gecUrlRules"
  ></v-text-field>
</v-col>
</v-row>
<v-row>
<v-col md="6" lg="6" sm="12">
  <v-text-field
    label="GED"
    outlined dense
    v-model="model.ged"
    :rules="rules.gedRules"
  ></v-text-field>
</v-col>
<v-col md="6" lg="6" sm="12">
  <v-text-field
    label="GED URL"
    outlined dense
    v-model="model.gedUrl"
    :rules="rules.gedUrlRules"
  ></v-text-field>
</v-col>
</v-row>
<v-row>

<v-col md="6" lg="6" sm="12">
  <v-textarea
    label="Description"
    outlined dense
    v-model="model.description"
    :rules="rules.descriptionRules"
  ></v-textarea>
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
        components: {
        },
        
        mounted: function() {
         
          this.model.user_webservice = "bjidoc.webservice"
          this.model.user_ws_password = "G3dassi2021"
          this.$store.dispatch('organismescategories/getList')
        },
       
  
        computed: mapGetters({
          listorganismescategories: 'organismescategories/listorganismescategories',
          detailorganisme:'organismes/detailorganisme',
          
          headers: 'faqcategories/headerfaqcategories'
        
        }),
        data: () => ({
          selected: {},
          loading: false,
          message:null,
          color:null,
          valid: true,
          showCategorie: false,
          message:null,
          model: {
            name: '',
            ged: '',
            gec:null,
            intitule:'',
            description: '',
            baseUrl: '',
            gedUrl: '',
            gecUrl: '',
            typeStructure: '',
            user_webservice: 'bjidoc.webservice',
            user_ws_password: 'G3dassi2021', 
            country_code:'+221',
            telephone: '',
            adresse: '',
            fonction: '',
            categorie_id:null
          },
          rules:{
          nameRules: [
            (v) => !!v || 'Le nom de l\'instance est obligatoire',
            (v) => (v && v.length <= 100) || "Le nom de l'instance ne doit pas dépasser 100 caractères",
            (v) => (v && v.length >= 2) || "Le nom de l'instance doit contenir au moins 2 caractères"
          ],
          // gedRules: [
          //   (v) => !!v || 'La GED est obligatoire',
          //   (v) => (v && v.length <= 100) || "La GED ne doit pas dépasser 100 caractères",
          //   (v) => (v && v.length >= 2) || "La GED doit contenir au moins 2 caractères"
          // ],
          gecRules: [
            (v) => !!v || 'La GEC est obligatoire',
            (v) => (v && v.length <= 100) || "La GEC ne doit pas dépasser 100 caractères",
            (v) => (v && v.length >= 2) || "La GEC doit contenir au moins 2 caractères"
          ],
          intituleRules: [
            (v) => !!v || 'L\'intitulé de l\'organisme est obligatoire',
            (v) => (v && v.length <= 100) || "L'intitulé de l'organisme ne doit pas dépasser 100 caractères",
            (v) => (v && v.length >= 2) || "L'intitulé de l'organisme doit contenir au moins 2 caractères"
          ],
          descriptionRules: [
            (v) => !!v || 'La description l\'organisme est obligatoire',
            (v) => (v && v.length <= 500) || "La description de l'organisme ne doit pas dépasser 100 caractères",
            (v) => (v && v.length >= 2) || "La description de l'organisme doit contenir au moins 2 caractères"
          ],
          gecUrlRules: [
            (v) => !!v || 'L\'URL de la GEC est obligatoire',
            (v) => (v && v.length >= 2) || "L'URL de la GEC doit contenir au moins 2 caractères"
          ],
          // gedUrlRules: [
          //   (v) => !!v || 'L\'URL de la GED est obligatoire',
          //   (v) => (v && v.length >= 2) || "L'URL de la GED doit contenir au moins 2 caractères"
          // ],
          typeStructureRules: [
            (v) => !!v || 'Le type de l\'organisme est obligatoire',
            (v) => (v && v.length <= 100) || "Le type de l'organisme ne doit pas dépasser 100 caractères",
            (v) => (v && v.length >= 2) || "Le type de l'organisme doit contenir au moins 2 caractères"
          ],
      
     
        },
    
    
          imageData:null,
        }),
        methods: {
          async changeCategorie(value) {
        console.log("VALUEE : ++++++++++++ ",value)
        this.model.typeStructure = value.id
       

        //this.selectedRegions.push(value.id)
        
      },
        
          submitForm () {
            let validation = this.$refs.form.validate()
          
            this.loading = true;
    
            validation && this.$gecApi.post('/structures/', {...this.model})
              .then((res) => {
                this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
                this.$router.push('/organismes');
              })
              .catch((error) => {
                  console.log('Code error ++++++: ', error)
                  this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
              }).finally(() => {
                this.loading = false;
                console.log('Requête envoyée ')
            });
          },
          resetForm () {
            this.$refs.form.reset()
          },
          resetValidationForm () {
            this.$refs.form.resetValidation()
          },
          async changeRole() {
  
          let checkRole = this.model.roles.filter(item => (item && item.name === 'point_focal' || item && item.name === 'admin_structure' || item && item.name === 'DGES' || item && item.name === 'directeur_eps')).length;
          if(checkRole==1)
          this.showFournisseur=true
          else
          this.showFournisseur=false
          console.log('************',checkRole)
          },
          },
        metaInfo () {
          return {
            items: this.items,
          }
        }
      }
    </script>
    