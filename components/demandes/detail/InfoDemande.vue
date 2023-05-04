<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="12" sm="12" lg="12" text-md-left>
          <div class="row">
              <div class="col-md-6">
                  <!--<p class="info-profil mb-4"><span>Prénom: </span>{{detaildemande.firstname}}</p>
                  <p class="info-profil mb-4"><span>Nom: </span>{{detaildemande.lastname}}</p>-->
                  <p class="info-profil mb-4"><span>Prénom: </span>{{detaildemande.firstname}}</p>
                  <p class="info-profil mb-4"><span>Nom: </span>{{detaildemande.lastname}}</p>
                  
                  <p class="info-profil mb-4"><span>Email : </span>{{detaildemande.email}}</p>
                  <p class="info-profil mb-4"><span>Téléphone : </span>{{detaildemande.telephone}}</p>
                  <p class="info-profil mb-4"><span>Profil : </span>
                    <v-chip
                      color="primary"
                      small
                      outlined
                      class="my-1 mr-1"
                      v-for="profiles in detaildemande.profiles"  :key="profiles.id"
                    >
                      {{ profiles.description }}
                    </v-chip>
                  </p>
              </div>
              <div class="col-md-6">
                  <!--<p class="info-profil mb-4"><span>Prénom: </span>{{detaildemande.firstname}}</p>
                  <p class="info-profil mb-4"><span>Nom: </span>{{detaildemande.lastname}}</p>-->
                  <p class="info-profil mb-4"><span>Message : </span>{{detaildemande.message}}</p>
                  
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
      detaildemande: 'demandes/detaildemande'
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
          this.$router.push('/demandes');
      },
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/demandes/'+id)
        .then(async (response) => {
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('demandes/getDetail',response.data)
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
