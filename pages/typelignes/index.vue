<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-type-ligne></list-type-ligne>      
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListTypeLigne from '@/components/typelignes/ListTypeLigne'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-typelignes')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListTypeLigne
    },
    mounted: function() {
      this.$store.dispatch('typelignes/getList')
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des typelignes',
            disabled: true,
            to: '/typelignes',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
