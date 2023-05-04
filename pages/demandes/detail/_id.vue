<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-demande></info-demande>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-demande></actions-demande>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoDemande from '@/components/demandes/detail/InfoDemande';
import ActionsDemande from '@/components/demandes/detail/ActionsDemande';

  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoDemande,
      ActionsDemande
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Demandes',
          disabled: false,
          to: '/demandes',
          exact: true
        },
        {
          text: 'Detail',
          disabled: true,
          to: '/demandes/detail',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
