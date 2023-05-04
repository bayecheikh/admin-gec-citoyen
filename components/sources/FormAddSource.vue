<template>
<div>
  <v-form class="text-sm-left" v-model="valid" ref="form">
    <v-row>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Libelle"
          outlined dense
          v-model="model.libelle_source"
          :rules="rules.libelle_sourceRules"
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
              label="Rechercher une type_source"
              outlined
              dense
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="listtypesources"
            :loading="listtypesources.length?false:true" 
            loading-text="Loading... Please wait"
            :single-select="singleSelect"
            item-key="libelle_type_source"
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
import { mapMutations, mapGetters } from 'vuex'
  export default {
    components: {
      Notification
    },
    computed: mapGetters({
      listtypesources: 'typesources/listtypesources',
      headers: 'typesources/headertypesources'
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
            text: 'Type source',
            align: 'start',
            sortable: true,
            value: 'libelle_type_source',
        }
      ],
      valid: true,
      model: {
        libelle_source: '',
        description: ''
      },
      rules:{
        libelle_sourceRules: [
          v => !!v || 'Libelle est obligatoire',
          v => (v && v.length <= 50) || 'Libelle doit etre inférieur à 20 caratères',
        ],
        descriptionRules: [
          v => !!v || 'Nom est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm () {
        this.loading = true;
        let validation = this.$refs.form.validate()
        let selectedtype_sources = this.selected.map((item)=>{return item.id})
        console.log('Donées formulaire ++++++ : ',{...this.model,type_sources:selectedtype_sources})
        
        validation && this.$msasApi.post('/source_financements', {...this.model,type_sources:selectedtype_sources})
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            this.$router.push('/sources');
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