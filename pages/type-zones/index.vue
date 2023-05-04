<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-type-zone></list-type-zone>     
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import ListTypeZone from '@/components/type-zones/ListTypeZone'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-type-zones')){
        return redirect('/')
      }
    },
    components: {
      PageHeader,
      ListTypeZone
    },
    mounted: function() {
      this.$store.dispatch('type-zones/getList')
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des types de zone d\'intervention',
            disabled: true,
            to: '/type-zones',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
