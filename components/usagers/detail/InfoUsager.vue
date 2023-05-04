<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="3" sm="12" lg="3" text-md-center>
          <!-- <img src="@/static/avatar/user.png" class="user-profil" alt="Espace Senegal Service"> -->
          <div class="headline">
            <v-avatar tile v-if="detailUsager.avatar" size="150px" style="border: solid 2px #d8d8d8;">
              <img :src="detailUsager.avatar" alt="Avatar"/>
            </v-avatar>
            <v-avatar tile size="100px" v-else style="border: solid 2px #d8d8d8;">
              <img src="@/static/avatar/default-user.png" alt="Cheikh Gueye"/>
            </v-avatar>
          </div>
        </v-col>
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
              <div class="col-md-6">
                  <h3 class="mb-4">{{detailUsager.firstname+' '+detailUsager.lastname}}</h3>
                  <p class="info-profil mb-4"><span>Date & lieu de naissance :
                      </span>{{detailUsager.user_details && detailUsager.user_details.date_of_birth}}
                  </p>
                  <p class="info-profil mb-4"><span>Adresse : </span>{{detailUsager.user_details && detailUsager.user_details.address}}</p>
                  <p class="info-profil mb-4"><span>Téléphone : </span>{{detailUsager.telephone}}</p>
                  <p class="info-profil mb-4"><span>Email : </span>{{detailUsager.email}}</p>
              </div>
              <div class="col-md-6">
                  <p class="info-profil mb-4"><span>Profession :
                      </span>{{detailUsager.user_details && detailUsager.user_details.fonction}}
                  </p>
                  <p class="info-profil mb-4"><span>Nationnalité : </span>{{detailUsager.user_details && detailUsager.user_details.nationality}}</p>
                  <p class="info-profil mb-4"><span>Lieu de naissance : </span>{{detailUsager.user_details && detailUsager.user_details.place_of_birth}}</p>
                  <p class="info-profil mb-4"><span>Type de pièce : </span>{{detailUsager.user_details && detailUsager.user_details.type_identification}}</p>
                  <p class="info-profil mb-4"><span>Numéro de pièce : </span>{{detailUsager.user_details && detailUsager.user_details.numero_identification}}</p>
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
      detailUsager: 'usagers/detailusager'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/usagers');
      },
    },
  }
</script>