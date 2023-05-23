<template>
<div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-categorie-modele-courrier></info-categorie-modele-courrier>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-categories-modeles-courriers></actions-categories-modeles-courriers>
            </v-col>
          </v-row>      
    </v-card>
  </div> 
</div>
  
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoCategorieModeleCourrier from '@/components/categoriesmodelescourriers/detail/InfoCategorieModeleCourrier';
import ActionsCategoriesModelesCourriers from '@/components/categoriesmodelescourriers/detail/ActionsCategoriesModelesCourriers';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoCategorieModeleCourrier,
      ActionsCategoriesModelesCourriers
    },
    // middleware: function ({redirect,$hasPermission}) {
    //   if(!$hasPermission('gerer-utilisateurs')){
    //     return redirect('/')
    //   }
    // },
    data () {
      return {
        leftmenuItems: [
          { text: 'Ajouter une catégorie de modèle courrier', icon: 'mdi-account-plus-outline',link:'/categoriesmodelescourriers/addCategorieModeleCourrier',position:0 },
          { text: 'Liste des catégories de modèle courrier', icon: 'mdi-account-group',link:'/categoriesmodelescourriers',position:1  }
        ],
        headerItems: [
        {
          text: 'Catégorie de modèle courrier',
          disabled: false,
          to: '/categoriesmodelescourriers',
          exact: true
        },
        {
          text: 'Détail',
          disabled: true,
          to: '/',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
