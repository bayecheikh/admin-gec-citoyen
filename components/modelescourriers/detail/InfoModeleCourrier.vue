<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
       
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
              
                  <p class="info-profil mb-4"><span>Nom : </span>{{detailmodelecourrier.name}}</p>
                  <p class="info-profil mb-4"><span>Objet : </span>{{detailmodelecourrier.objet}}</p>
                  <p class="info-profil mb-4"><span>Message : </span>{{detailmodelecourrier.message}}</p>
            
                
              </div>
              <div class="col-md-6 border-right">
                <p class="info-profil mb-4"><span>Description : </span>{{detailmodelecourrier.description}}</p>
                  <p class="info-profil mb-4"><span>Catégorie : </span>{{detailmodelecourrier.categorie.name}}</p>
              

          </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    detailmodelecourrier: 'modelescourriers/detailmodelecourrier'
  }),

  created() {
    console.log(this.detailmodelecourrier);
  },

  methods: {
    submitForm() {
      alert('Formulaire soumis')
    },
    retour() {
      this.$router.push('/modelescourriers');
    },
  },
}
</script>

<style scoped>
.border-left{
  border-left: solid 2px rgb(0 0 0 / 4%);;
}
</style>