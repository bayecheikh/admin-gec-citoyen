<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <!-- <img src="@/static/avatar/default-user.png" class="user-profil" alt="Plateforme GEC CITOYEN"> -->
          <div class="headline">
            <v-avatar v-if="detailUtilisateur.avatar" tile class="custom-v-avatar" size="150px">
              <img :src="detailUtilisateur.avatar" alt="Avatar" />
            </v-avatar>
            <v-avatar size="100px" v-else>
              <img src="@/static/avatar/default-user.png" alt="Default Avatar" />
            </v-avatar>
          </div>
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4"><span>Prénom et nom : </span>{{ detailUtilisateur.name }}</p>
              <p class="info-profil mb-4"><span>Email : </span>{{ detailUtilisateur.email }}</p>
              <p class="info-profil mb-4"><span>Rôles : </span>
                <v-chip color="primary" small outlined class="my-1 mr-1" v-for="role in detailUtilisateur.roles"
                  :key="role.id">
                  {{ role.name }}
                </v-chip>
              </p>
            </div>
            <div class="col-md-6 border-left">

              <p class="info-profil mb-4"><span>Téléphone : </span>{{ detailUtilisateur.telephone }}</p>
              <p class="info-profil mb-4"><span>Adresse : </span>{{ detailUtilisateur.adresse }}</p>
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
    const id = this.$nuxt._route.params.id
    this.getDetail(id)
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
      this.progress = true
      let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');

      let headers = {
        Authorization: authToken,
      };
      this.$gecApi.$get('/users/' + id, { headers })
        .then(async (response) => {
          this.$store.dispatch('utilisateurs/getDetail', response.data.data)
        }).catch((error) => {
          this.$toast.error(error?.response?.data?.data?.message).goAway(3000)
        })
    },
  },
}
</script>

<style>
.custom-v-avatar {
  border: solid 2px #d8d8d8;
}
</style>
