<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-monnaie></form-add-monnaie>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddMonnaie from '@/components/monnaies/FormAddMonnaie';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddMonnaie
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-monnaies')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'monnaies',
          disabled: false,
          to: '/monnaies',
          exact: true
        },
        {
          text: 'Nouvelle monnaie',
          disabled: false,
          to: '/monnaies/addmonnaie',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
