<template>


  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <form-update-type-zone></form-update-type-zone>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateTypeZone from '@/components/type-zones/modifier/FormUpdateTypeZone';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateTypeZone
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-type-zones')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'type-zones',
          disabled: false,
          to: '/type-zones',
          exact: true
        },
        {
          text: 'Detail type-zone',
          disabled: true,
          to: '/type-zones/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
