<template>
  
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-type-zone></form-add-type-zone> 
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddTypeZone from '@/components/type-zones/FormAddTypeZone';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddTypeZone
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
          text: 'Nouveau de type zone d\'intervention',
          disabled: false,
          to: '/type-zones/addTypeZone',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
