<template>
  
   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <form-update-annee></form-update-annee>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateAnnee from '@/components/annees/modifier/FormUpdateAnnee';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateAnnee
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-annees')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'annees',
          disabled: false,
          to: '/annees',
          exact: true
        },
        {
          text: 'Detail annee',
          disabled: true,
          to: '/annees/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
