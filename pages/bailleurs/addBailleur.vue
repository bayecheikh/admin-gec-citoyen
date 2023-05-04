<template>

   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-bailleur></form-add-bailleur>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddBailleur from '@/components/bailleurs/FormAddBailleur';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddBailleur
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
          text: 'bailleurs',
          disabled: false,
          to: '/bailleurs',
          exact: true
        },
        {
          text: 'Nouveau bailleur',
          disabled: false,
          to: '/bailleurs/addBailleur',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
