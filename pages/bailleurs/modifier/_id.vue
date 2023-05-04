<template>
  
   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <form-update-bailleur></form-update-bailleur>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateBailleur from '@/components/bailleurs/modifier/FormUpdateBailleur';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateBailleur
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-bailleurs')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Bailleurs',
          disabled: false,
          to: '/bailleurs',
          exact: true
        },
        {
          text: 'Detail bailleur',
          disabled: true,
          to: '/bailleurs/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
