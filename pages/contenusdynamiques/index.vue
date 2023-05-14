<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-contenus-dynamiques></list-contenus-dynamiques>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListContenusDynamiques from '@/components/contenusdynamiques/ListContenusDynamiques'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListContenusDynamiques
    },
    mounted: function() {
      this.$store.dispatch('contenusdynamiques/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'contenusdynamiques', icon: 'mdi-lock',link:'/contenusdynamiques',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des contenus',
            disabled: true,
            to: '/contenusdynamiques',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
