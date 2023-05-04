<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="4" lg="4" sm="12">
          <v-text-field
            label="Libelle"
            outlined dense
            v-model="model.libelle"
            :rules="rules.libelleRules"
          ></v-text-field>
        </v-col>
        <v-col md="4" lg="4" sm="12">
          <v-text-field
            label="Slug"
            outlined dense
            v-model="model.slug"
            :rules="rules.slugRules"
          ></v-text-field>
        </v-col>
        <v-col md="4" lg="4" sm="12">
          <v-checkbox
            v-model="model.predefini"
            label="Champ prédéfini"
            :value="true"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-btn
      :loading="loading"
        :disabled="!valid"
        depressed
        class="mr-4 text-white" color="primary"
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
      this.model.id = this.detailmodefinancement.id
      this.model.libelle = this.detailmodefinancement.libelle
      this.model.slug = this.detailmodefinancement.slug
      this.model.predefini = this.detailmodefinancement.predefini == "1"?true:"0"
    },
    computed: mapGetters({
      detailmodefinancement:'modefinancements/detailmodefinancement'
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
        libelle: '',
        slug: '',
        predefini:false
      },
      rules:{
        libelleRules: [
          v => !!v || 'Prénom est obligatoire',
          v => (v && v.length <= 50) || 'Prénom doit etre inférieur à 20 caratères',
        ],
        slugRules: [
          v => !!v || 'Nom est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm () {
        this.loading = true;
        let validation = this.$refs.form.validate()
        let predefini = this.model.predefini==null?'0':'1'
        console.log('Donées formulaire ++++++ : ',{...this.model,predefini:predefini})
        this.loading = false;
        
        validation && this.$msasApi.put('/ligne_mode_investissements/'+this.model.id, {...this.model,predefini:predefini})
          .then((res) => {    
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            //this.$router.push('/modefinancements');
            console.log('Donées reçu++++++ : ',res.data)
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