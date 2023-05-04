<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-annee></list-annee>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListAnnee from '@/components/annees/ListAnnee'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-annees')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListAnnee
    },
    mounted: function() {
      this.$store.dispatch('annees/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'annees', icon: 'mdi-lock',link:'/annees',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des annees',
            disabled: true,
            to: '/annees',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
