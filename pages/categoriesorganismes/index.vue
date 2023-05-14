<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-categories-organismes></list-categories-organismes>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListCategoriesOrganismes from '@/components/categoriesorganismes/ListCategoriesOrganismes'
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
      ListCategoriesOrganismes
    },
    mounted: function() {
      this.$store.dispatch('categoriesorganismes/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'categoriesorganismes', icon: 'mdi-lock',link:'/categoriesorganismes',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des types d\'organisme',
            disabled: true,
            to: '/categoriesorganismes',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
