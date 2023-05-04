<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      text
      color="primary"
      v-on:click="retour()"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour à la liste
    </v-btn>
    <v-btn
      flat
      outlined
      v-on:click="modifier()"
      v-if="detaildemande.status=='brouillon' || detaildemande.status=='rejete'"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Modifier
    </v-btn> 
    <v-btn
    :loading="loadingValidation"
      flat
      outlined
      color="green"
      v-on:click="valider()"
      v-if="($hasPermission(detaildemande.status) || ($hasRole('admin_structure') && detaildemande.status=='non_traite')) && $hasPermission('validation')"
    >
      <v-icon left>
        mdi-check
      </v-icon>
      {{'Traitée'}}
    </v-btn>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    mounted: function() {
      this.state=this.detaildemande.state
      this.status=this.detaildemande.status
    },
    computed: mapGetters({
      detaildemande: 'demandes/detaildemande'
    }),
    data: () => ({
      state:'',
      status:'',
      loadingValidation: false,
      loadingRejet: false,
      message:null,
      color:null,
      valid: true,
      selectedItem: 0,
      valid: true,
      model: {
        motif:''
      },
      rules:{
        nameRules: [
          v => !!v || 'Libelle est obligatoire',
          v => (v && v.length <= 50) || 'Prénom doit etre inférieur à 20 caratères',
        ],
        descriptionRules: [
          v => !!v || 'Description est obligatoire'
        ],
      },
    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
        this.$router.push('/demandes');
      },
      modifier(){ 
        this.$router.push('/demandes/modifier/'+this.detaildemande.id);      
      },

      valider () {
        this.loadingValidation = true;
        console.log('Donées formulaire ++++++ : ',{id:this.detaildemande.id})
        
        this.$msasApi.post('/validation_demande', {id:this.detaildemande.id})
          .then((res) => {  
            this.state = res.data.data.state  
            this.status = res.data.data.status  
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Validation réussie !'})
            this.$router.push('/demandes');
            
          })
          .catch((error) => {
               console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loadingValidation = false;
            console.log('Requette envoyé ')
        });
      },
      rejeter () {
        this.loadingRejet = true;
        console.log('Donées formulaire ++++++ : ',{id:this.detaildemande.id})
        
        this.$msasApi.post('/rejet_demande', {id:this.detaildemande.id,motif_rejet:this.model.motif})
          .then((res) => {  
            this.state = res.data.data.state  
            this.status = res.data.data.status 
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'demande rejeté avec succés!'})
            this.$router.push('/demandes');
            
          })
          .catch((error) => {
               console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loadingRejet = false;
            console.log('Requette envoyé ')
        });
      },
      reinitialiser(){  
        alert('Réinitialiser mot de passe')     
      },
    },
  }
</script>