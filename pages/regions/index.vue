<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-region></list-region>  
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import ListRegion from '@/components/regions/ListRegion'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-regions')){
        return redirect('/')
      }
    },
    components: {
      PageHeader,
      ListRegion
    },
    mounted: function() {
      this.$store.dispatch('regions/getList')
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des regions',
            disabled: true,
            to: '/regions',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
