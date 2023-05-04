<template>
<div>
  <v-form class="text-sm-left" v-model="valid" ref="form">
    <v-row>
      <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Nom"
            outlined dense
            v-model="model.nom_region"
            :rules="rules.nom_regionRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Slug"
            outlined dense
            v-model="model.slug"
            :rules="rules.slugRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Latitude"
            outlined dense
            v-model="model.latitude"
            :rules="rules.latitudeRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Longitude"
            outlined dense
            v-model="model.longitude"
            :rules="rules.longitudeRules"
          ></v-text-field>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea
            label="Code SVG"
            outlined dense
            v-model="model.svg"
            :rules="rules.svgRules"
          ></v-textarea>
        </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col md="12" lg="12" sm="12" class="my-0 py-0">
        <template>
          <v-card-title class="pl-0 pr-0">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Rechercher une departement"
              outlined
              dense
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="listdepartements"
            :loading="listdepartements.length?false:true" 
            loading-text="Loading... Please wait"
            :single-select="singleSelect"
            item-key="nom_departement"
            show-select
            class="elevation-1"
            :search="search"
          >
          </v-data-table>
        </template>
      </v-col>
    </v-row>

    <v-btn
      :loading="loading"
      :disabled="!valid"
      depressed
      class="mr-4 text-white mt-4" color="#1B73E8"
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
  export default {
    components: {
      Notification
    },
    mounted: function() {
      this.model.id = this.detailregion.id
      this.model.nom_region = this.detailregion.nom_region
      this.model.slug = this.detailregion.slug
      this.model.latitude = this.detailregion.latitude
      this.model.longitude = this.detailregion.longitude
      this.model.svg = this.detailregion.svg
      this.selected = this.detailregion.departements
    },
    computed: mapGetters({
      detailregion:'regions/detailregion',
      listdepartements: 'departements/listdepartements',
    }),
    data: () => ({
      loading: false,
      message:null,
      color:null,
      valid: true,
      search: '',
      selected: [],
      search:'',
      selectedItem: 0,
      headers : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'nom_departement',
        },
        { text: 'Slug', value: 'slug' }
      ],
      valid: true,
      model: {
        id:null,
        name: '',
        description: ''
      },
      rules:{
        nameRules: [
          v => !!v || 'Prénom est obligatoire',
          v => (v && v.length <= 50) || 'Prénom doit etre inférieur à 20 caratères',
        ],
        descriptionRules: [
          v => !!v || 'Nom est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm () {
        //this.loading = true;
        let validation = this.$refs.form.validate()
        let selectedDepartements = this.selected.map((item)=>{return item.id})
        let id = this.model.id
        console.log('Donées formulaire ++++++ : ',{...this.model,departements:selectedDepartements})
        
        validation && this.$msasApi.put('/regions/'+id, {...this.model,departements:selectedDepartements})
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Modification réussie'})
            this.$router.push('/regions');
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requette envoyé')
        });
      },
      resetForm () {
        this.$refs.form.reset()
      },
      resetValidationForm () {
        this.$refs.form.resetValidation()
      },
    }
  }
</script>