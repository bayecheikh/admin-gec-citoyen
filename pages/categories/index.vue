<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-categorie></list-categorie>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListCategorie from '@/components/categories/ListCategorie'
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
      ListCategorie
    },
    mounted: function() {
      this.$store.dispatch('categories/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'categories', icon: 'mdi-lock',link:'/categories',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des categories',
            disabled: true,
            to: '/categories',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
