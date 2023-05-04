<template>
  <v-container pl-0>
    <v-row>
      <v-col md="2" lg="2" sm="12">
        <v-container pl-0>
          <left-menu :items="leftmenuItems"></left-menu>
        </v-container>
      </v-col>

      <v-col md="10" lg="10" sm="12" class="full-height">
        <v-container>
          <page-header :items="headerItems"></page-header>
        </v-container>
        <v-container pl-0>
          <v-row align="center"
            justify="center">
            <v-col md="6" lg="6" sm="12">
              <form class="text-sm-left pb-5">           
                <v-row>
                  <v-col md="6" lg="6" sm="12">
                    <v-text-field
                    label="Mot de passe actuel"
                    outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6" lg="6" sm="12">
                    <v-text-field
                      label="Nouveau mot de passe"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn
                  class="mr-4 text-white" color="#1B73E8"
                  @click="submit"
                >
                  Enregistrer
                </v-btn>
              </form>
              <hr  class="mb-5">
              <p><strong>Authentification en deux étapes</strong></p>
              <p><small>Utiliser un second facteur d’authentification en plus de votre mot de passe pour augmenter la sécurité de votre compte</small></p>
              <span><v-icon >mdi-lock-outline</v-icon></span><span>Code de récupération</span>             
              <p class="mt-5 mb-5">
                <v-btn
                  rounded
                  dark
                  class="text-capitalize font-weight-light"
                >
                  Générer des codes de récupération
                </v-btn>
              </p>
              <hr class="mb-5">
              <p><strong>Appareils & sessions</strong></p>
              <p><small>Clients web, applications de bureau et mobiles actuellement connectés avec votre compte.</small></p>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Appareil
                      </th>
                      <th class="text-left">
                        Dernière activité
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in activites"
                      :key="item.name"
                    >
                      <td><v-icon >mdi-laptop</v-icon> {{ item.name }}</td>
                      <td>{{ item.activites }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Informations personnelles', icon: 'mdi-account-edit',link:'/parametres/infopersonnelles' },
          { text: 'Securité', icon: 'mdi-account-lock',link:'/parametres/securite'  }
        ],
        headerItems: [
          {
            text: 'Tableau de bord',
            disabled: false,
            to: '/dashboard',
            exact: true
          },
          {
            text: 'Paramétres',
            disabled: false,
            to: '/parametres',
            exact: true
          },
          {
            text: 'Securité',
            disabled: true,
            to: '/parametres/securite',
            exact: true
          }
        ],
        activites: [
          {
            name: 'Cette session',
            activites: 'il y a quelques secondes',
          },
          {
            name: 'Firefox 83 - oS X',
            activites: 'Il y a deux jours',
          }
        ],
      }
    }

  }
</script>

<style scoped>
.leftmenu{
  background-color: rgb(227, 227, 236);
  color:black;
  padding:0px 30px 0px 10px !important;
  border-radius: 0px 20px 20px 0px;
}
.text-white{
  color: #fff;
}
.form{
  width: 50%;
}
</style>
