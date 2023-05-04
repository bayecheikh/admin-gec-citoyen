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
            <v-col cols="6" md="6" lg="6" sm="12">
              <form-add-usager></form-add-usager>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddUsager from '@/components/usagers/FormAddUsager';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormAddUsager
    },
    mounted: function() {
      /* this.$store.dispatch('profils/getList') */
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Accueil', icon: 'mdi-home',link:'/dashboard',position:1  },
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
          text: 'Nouveau usager',
          disabled: false,
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
