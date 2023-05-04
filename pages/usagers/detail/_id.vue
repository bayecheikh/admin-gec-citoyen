<template>
  <v-container pl-0>
    <v-row>
      <v-col md="2" lg="2" sm="12" >
        <v-container pl-0>
          <left-menu :items="leftmenuItems"></left-menu>
        </v-container>
      </v-col>

      <v-col md="10" lg="10" sm="12" class="full-height">
          <page-header :items="headerItems"></page-header>
          <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-usager></info-usager>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-usager></actions-usager>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <historique-usager></historique-usager>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoUsager from '@/components/usagers/detail/InfoUsager';
import ActionsUsager from '@/components/usagers/detail/ActionsUsager';
import HistoriqueUsager from '@/components/usagers/detail/HistoriqueUsager';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoUsager,
      ActionsUsager,
      HistoriqueUsager
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Accueil', icon: 'mdi-home-outline',link:'/dashboard',position:1  },
          { text: 'Nouveau usager', icon: 'mdi-account-plus-outline',link:'/usagers/addUsager',position:0 }
        ],
        headerItems: [
        {
          text: 'Usagers',
          disabled: false,
          to: '/usagers',
          exact: true
        },
        {
          text: 'Detail',
          disabled: true,
          to: '/usagers/addUsager',
          exact: true
        }
        
        ],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
        menu3: false,
        modal: false,
        roles: ['Sperviseur national'],
        localisations: ['Thiès','Dakar'],

      }
    }

  }
</script>

<style scoped>

</style>
