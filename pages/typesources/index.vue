<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-typesource></list-typesource>      
    </v-card>
  </div> 
</div>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListTypesource from '@/components/typesources/ListTypesource'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-type-sources')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListTypesource
    },
    mounted: function() {
      this.$store.dispatch('typesources/getList')
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des type sources',
            disabled: true,
            to: '/typesources',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
