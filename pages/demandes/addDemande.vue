<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-demande></form-add-demande>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddDemande from '@/components/demandes/FormAddDemande';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormAddDemande
    },
    mounted: function() {
      /* this.$store.dispatch('usagers/getSelectList')
      this.$store.dispatch('procedures/getList') */
    },
    data () {
      return {
        leftmenuItems:[
          { text: 'Accueil', icon: 'mdi-home',link:'/dashboard/charge-clientel',position:1  },
          { text: 'Nouvelle demande', icon: 'mdi-account-plus-outline',link:'/demandes/addDemande',position:0 }
        ],
        headerItems: [
        {
          text: 'Demandes',
          disabled: false,
          to: '/demandes',
          exact: true
        },
        {
          text: 'Nouvelle demande',
          disabled: false,
          to: '/demandes/addDemande',
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
