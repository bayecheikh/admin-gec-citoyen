<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4" v-if="detailUtilisateur?.name"><span>Prénom et nom :
                </span>{{ detailUtilisateur?.name }}</p>
              <p class="info-profil mb-4" v-if="detailUtilisateur?.sexe"><span>Sexe : </span>{{ detailUtilisateur?.sexe }}
              </p>
              <p class="info-profil mb-4"><span>Rôles : </span>
                <v-chip color="primary" small outlined class="my-1 mr-1" v-for="role in detailUtilisateur.roles"
                  :key="role.id">
                  {{ role.name }}
                </v-chip>
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
    getDetail(id) {
      const loggedInUser = JSON.parse(localStorage.getItem('gecAdminLoggedInUser'))
     
      this.$store.dispatch('utilisateurs/getDetail', loggedInUser)
        this.progress=true
        let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');

      let headers = {
        Authorization: authToken, 
      };
        this.$gecApi.$get('/users/'+id, {headers})
      .then(async (response) => {
          this.$store.dispatch('utilisateurs/getDetail',response.data.data)
      }).catch((error) => {
           this.$toast.error(error?.response?.data?.message).goAway(3000)
          
      })
    
    },
  },
}
</script>
