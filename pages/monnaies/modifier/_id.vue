<template>
   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-update-monnaie></form-update-monnaie>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateMonnaie from '@/components/monnaies/modifier/FormUpdateMonnaie';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateMonnaie
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
          text: 'Detail monnaie',
          disabled: true,
          to: '/monnaies/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
