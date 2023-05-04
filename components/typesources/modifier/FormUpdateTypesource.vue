<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Nom"
            outlined dense
            v-model="model.libelle_type_source"
            :rules="rules.libelle_type_sourceRules"
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
  export default {
    components: {
      Notification
    },
    mounted: function() {
      this.model.id = this.detailtypesource.id
      this.model.libelle_type_source = this.detailtypesource.libelle_type_source
      this.model.description = this.detailtypesource.description
    },
    computed: mapGetters({
      detailtypesource:'typesources/detailtypesource'
    }),
    data: () => ({
      loading: false,
      message:null,
      color:null,
      valid: true,
      selectedItem: 0,
      valid: true,
      model: {
        id:null,
        libelle_type_source: '',
        description: ''
      },
      rules:{
        libelle_type_sourceRules: [
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
        console.log('Donées formulaire ++++++ : ',{...this.model})
        this.loading = false;
        
        validation && this.$msasApi.put('/type_sources/'+this.model.id, {...this.model})
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            this.$router.push('/typesources');
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