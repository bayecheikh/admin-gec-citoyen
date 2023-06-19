<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
       
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
              
                <p class="info-profil mb-4"><span>Catégorie : </span>{{detailcontenudynamique.categorie.libelle}}</p>
                  <p class="info-profil mb-4"><span>Titre : </span>{{detailcontenudynamique.title}}</p>
                  <p class="info-profil mb-4"><span>Description: </span>{{detailcontenudynamique.resume}}</p>
                 
               
        
                
              </div>
              <div class="col-md-6 border-right">
              
                <p class="info-profil mb-4"><span>Body : </span>{{detailcontenudynamique.body}}</p>

              <p class="info-profil mb-4"><span>Lien : </span>{{detailcontenudynamique.link}}</p>
            
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
    detailcontenudynamique: 'contenusdynamiques/detailcontenudynamique'
  }),

  created() {
    console.log(this.detailcontenudynamique);
  },

  methods: {
    submitForm() {
      alert('Formulaire soumis')
    },
    retour() {
      this.$router.push('/contenusdynamiques');
    },
  },
}
</script>

<style scoped>
.border-left{
  border-left: solid 2px rgb(0 0 0 / 4%);;
}
</style>