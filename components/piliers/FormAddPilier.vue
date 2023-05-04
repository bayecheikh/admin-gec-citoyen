<template>
<div>
  <v-form class="text-sm-left" v-model="valid" ref="form">
    <v-row>
      <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Nom"
            outlined dense
            v-model="model.nom_pilier"
            :rules="rules.nom_pilierRules"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col md="12" lg="12" sm="12" class="my-0 py-0">
        <template>
          <v-card-title class="pl-0 pr-0">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Rechercher un axe"
              outlined
              dense
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="listaxes"
            :loading="listaxes.length?false:true" 
            loading-text="Loading... Please wait"
            :single-select="singleSelect"
            item-key="nom_axe"
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
    computed: mapGetters({
      listaxes: 'axes/listaxes',
      headers: 'axes/headeraxes'
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
            value: 'nom_axe',
        }
      ],
      valid: true,
      model: {
        nom_pilier: ''
      },
      rules:{
        nom_pilierRules: [
          v => !!v || 'Libelle est obligatoire',
          v => (v && v.length <= 50) || 'Nom doit etre inférieur à 20 caratères',
        ],
        slugRules: [
          v => !!v || 'Slug est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm () {
        this.loading = true;
        let validation = this.$refs.form.validate()
        let selectedaxes = this.selected.map((item)=>{return item.id})
        console.log('Donées formulaire ++++++ : ',{...this.model,axes:selectedaxes})
        
        validation && this.$msasApi.post('/piliers', {...this.model,axes:selectedaxes})
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            this.$router.push('/piliers');
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
    }
  }
</script>