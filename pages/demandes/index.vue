<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-demande></list-demande>
    </v-card>
  </div> 
</div>
</template>

<script>
  import LeftMenu from '@/components/LeftMenu';
  import PageHeader from '@/components/PageHeader';
  import ListDemande from '@/components/demandes/ListDemande'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-demandes')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListDemande
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des demandes',
            disabled: true,
            to: '/demandes',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
