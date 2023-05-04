<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <!-- <img src="@/static/avatar/user.png" class="user-profil" alt="Espace Senegal Service"> -->
          <div class="headline">
            <v-avatar v-if="detailUtilisateur.avatar" tile style="border: solid 2px #d8d8d8;" size="150px">
              <img :src="detailUtilisateur.avatar" alt="Avatar"/>
            </v-avatar>
            <v-avatar size="100px" v-else>
              <img src="@/static/avatar/default-user.png" alt="Cheikh Gueye"/>
            </v-avatar>
          </div>
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6 border-left">
                  <!--<p class="info-profil mb-4"><span>Prénom: </span>{{detailUtilisateur.firstname}}</p>
                  <p class="info-profil mb-4"><span>Nom: </span>{{detailUtilisateur.lastname}}</p>-->
                  <p class="info-profil mb-4"><span>Prénom et Nom: </span>{{detailUtilisateur.name}}</p>
                  
                  <p class="info-profil mb-4"><span>Email : </span>{{detailUtilisateur.email}}</p>
                  <p class="info-profil mb-4"><span>Roles : </span>
                    <v-chip
                      color="primary"
                      small
                      outlined
                      class="my-1 mr-1"
                      v-for="role in detailUtilisateur.roles"  :key="role.id"
                    >
                      {{ role.description }}
                    </v-chip>
                  </p>
              </div>
              <div class="col-md-6 border-left">
                  <p class="info-profil mb-4" v-if="detailUtilisateur.fonction"><span>Profession :
                      </span>{{ detailUtilisateur.fonction}}
                  </p>
                  <p class="info-profil mb-4" v-if="detailUtilisateur.structures && detailUtilisateur.structures.length"><span>Structure: </span>{{ detailUtilisateur.structures[0] && detailUtilisateur.structures[0].nom_structure}}</p>  
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
    mounted: function() {
      this.getDetail(this.id)
    },
    computed: mapGetters({
      detailUtilisateur: 'utilisateurs/detailutilisateur'
    }),
    data () {
      return {
        id : this.$nuxt._route.params.id,
      }
    },
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/utilisateurs');
      },
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/users/'+id)
        .then(async (response) => {
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('utilisateurs/getDetail',response.data)
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
    },
  }
</script>
