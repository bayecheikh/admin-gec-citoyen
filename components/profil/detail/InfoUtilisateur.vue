<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <!-- <img src="@/static/avatar/default-user.png" class="user-profil" alt="Plateforme GEC CITOYEN"> -->
          <div class="headline">

            <v-avatar size="100px">
              <img src="@/static/avatar/default-user.png" alt="Cheikh Gueye" />
            </v-avatar>
          </div>
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4" v-if="detailUtilisateur?.firstname"><span>Prénom:
                </span>{{ detailUtilisateur?.firstname }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.lastname"><span>Nom:
                </span>{{ detailUtilisateur?.lastname }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.sexe"><span>Sexe: </span>{{ detailUtilisateur?.sexe }}
              </p>

              <p class="info-profil mb-4" v-if="detailUtilisateur?.email"><span>Email :
                </span>{{ detailUtilisateur?.email }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.role"><span>Roles : </span>{{ detailUtilisateur?.role }}
              </p>
            </div>
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4" v-if="detailUtilisateur?.adresse"><span>Adresse :
                </span>{{ detailUtilisateur?.adresse }}
              </p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.telephone"><span>Telephone :
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
import { mapMutations, mapGetters } from 'vuex'
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
      console.log("AAAAAAA+++++", loggedInUser)
      this.$store.dispatch('utilisateurs/getDetail', loggedInUser)
      //   this.progress=true
      //   this.$gecApi.$get('/users/'+id)
      // .then(async (response) => {
      //     console.log('Detail ++++++++++',response)
      //     this.$store.dispatch('utilisateurs/getDetail',response.data)
      // }).catch((error) => {
      //      this.$toast.error(error?.response?.data?.message).goAway(3000)
      //     console.log('Code error ++++++: ', error?.response?.data?.message)
      // }).finally(() => {
      //     console.log('Requête envoyée ')
      // });
      //console.log('total items++++++++++',this.paginationstructure)
    },
  },
}
</script>
