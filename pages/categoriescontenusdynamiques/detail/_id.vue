<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-categorie-contenu-dynamique></info-categorie-contenu-dynamique>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-categories-contenus-dynamiques></actions-categories-contenus-dynamiques>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import InfoCategorieContenuDynamique from '@/components/categoriescontenusdynamiques/detail/InfoCategorieContenuDynamique';
import ActionsCategoriesContenusDynamiques from '@/components/categoriescontenusdynamiques/detail/ActionsCategoriesContenusDynamiques';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    InfoCategorieContenuDynamique,
    ActionsCategoriesContenusDynamiques
  },
  // middleware: function ({redirect,$hasPermission}) {
  //   if(!$hasPermission('gerer-utilisateurs')){
  //     return redirect('/')
  //   }
  // },
  data() {
    return {
      headerItems: [
        {
          text: 'Catégorie de contenu dynamique',
          disabled: false,
          to: '/categoriescontenusdynamiques',
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


