<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-source></list-source>  
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListSource from '@/components/sources/ListSource'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-source-financement')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListSource
    },
    mounted: function() {
      this.$store.dispatch('sources/getList')
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des sources',
            disabled: true,
            to: '/sources',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
