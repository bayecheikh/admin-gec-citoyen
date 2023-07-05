<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4" v-if="detailUtilisateur?.firstname"><span>Prénom :
                </span>{{ detailUtilisateur?.firstname }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.lastname"><span>Nom :
                </span>{{ detailUtilisateur?.lastname }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.sexe"><span>Sexe : </span>{{ detailUtilisateur?.sexe }}
              </p>

             
              <p class="info-profil mb-4" v-if="detailUtilisateur?.role"><span>Rôles : </span>{{ detailUtilisateur?.role }}
              </p>
            </div>
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4" v-if="detailUtilisateur?.email"><span>Email :
                </span>{{ detailUtilisateur?.email }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.adresse"><span>Adresse :
                </span>{{ detailUtilisateur?.adresse }}
              </p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.telephone"><span>Téléphone :
                </span>{{ detailUtilisateur?.telephone }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted: function () {
    this.getDetail(this.id)
  },
  computed: mapGetters({
    detailUtilisateur: 'utilisateurs/detailutilisateur'
  }),
  data() {
    return {
      id: this.$nuxt._route.params.id,
    }
  },
  methods: {
    submitForm() {
      alert('Formulaire soumis')
    },
    retour() {
      this.$router.push('/utilisateurs');
    },
    getDetail(id) {
      const loggedInUser = JSON.parse(localStorage.getItem('gecAdminLoggedInUser'))
     
      this.$store.dispatch('utilisateurs/getDetail', loggedInUser)
      //   this.progress=true
      //   this.$gecApi.$get('/users/'+id)
      // .then(async (response) => {
      //     this.$store.dispatch('utilisateurs/getDetail',response.data)
      // }).catch((error) => {
      //      this.$toast.error(error?.response?.data?.message).goAway(3000)
      //     
      // }).finally(() => {
      //     
      // });
    
    },
  },
}
</script>
