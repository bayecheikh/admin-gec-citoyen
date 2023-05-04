<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <img src="@/static/avatar/user.png" class="user-profil" alt="Espace Senegal Service">
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
                  <h3 class="mb-4">{{detaildepartement.nom_departement}}</h3>
                  <p class="info-profil mb-4"><span>Slug :
                      </span>{{detaildepartement.slug}}
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span>Latitude :
                      </span>{{detaildepartement.latitude}}
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span>Longitude :
                      </span>{{detaildepartement.longitude}}
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4"><span>SVG :
                      </span>{{detaildepartement.svg}}
                  </p>
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
      detaildepartement: 'departements/detaildepartement'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/departements');
      },
    },
  }
</script>
<style scoped>
.border-left{
  border-left: solid 2px rgb(0 0 0 / 4%);;
}
</style>