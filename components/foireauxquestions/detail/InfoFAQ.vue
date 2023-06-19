<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
       
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
              
                  <p class="info-profil mb-4"><span>Question : </span>{{detailfoireauxquestions.question}}</p>
                  <p class="info-profil mb-4"><span>Réponse : </span>{{detailfoireauxquestions.response}}</p>
                
              </div>
              <div class="col-md-6 border-right">
              
                <p class="info-profil mb-4"><span>Description : </span>{{detailfoireauxquestions.description}}</p>

              <!-- <p class="info-profil mb-4"><span>Catégorie : </span>{{detailfoireauxquestions.categorie.name}}</p> -->
              <!-- <p class="info-profil mb-4"><span>Lien : </span>{{detailfoireauxquestions.link}}</p> -->

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
    detailfoireauxquestions: 'foireauxquestions/detailfoireauxquestions'
  }),

  created() {
    console.log(this.detailfoireauxquestions);
  },

  methods: {
    submitForm() {
      alert('Formulaire soumis')
    },
    retour() {
      this.$router.push('/foireauxquestions');
    },
  },
}
</script>

<style scoped>
.border-left{
  border-left: solid 2px rgb(0 0 0 / 4%);;
}
</style>