<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-categorie-modele-courrier></form-add-categorie-modele-courrier>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddCategorieModeleCourrier from '@/components/categoriesmodelescourriers/FormAddCategorieModeleCourrier';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddCategorieModeleCourrier
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-modeles-courriers')) {
      return redirect('/')
    }
  },

  data() {
    return {
      headerItems: [
        {
          text: 'Catégories de modèle courrier',
          disabled: false,
          to: '/categoriesmodelescourriers',
          exact: true
        },
        {
          text: 'Nouvelle catégorie de modèle courrier',
          disabled: false,
          to: '/categoriesmodelescourriers/addCategorieModeleCourrier',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  