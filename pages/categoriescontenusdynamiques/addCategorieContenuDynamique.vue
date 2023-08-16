<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-categorie-contenu-dynamique></form-add-categorie-contenu-dynamique>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddCategorieContenuDynamique from '@/components/categoriescontenusdynamiques/FormAddCategorieContenuDynamique';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddCategorieContenuDynamique
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-contenus-dynamiques')) {
      return redirect('/')
    }
  },

  data() {
    return {
      headerItems: [
        {
          text: 'Catégories de contenu',
          disabled: false,
          to: '/categoriescontenusdynamiques',
          exact: true
        },
        {
          text: 'Nouvelle catégorie de contenu',
          disabled: false,
          to: '/categoriescontenusdynamiques/addCategorieContenuDynamique',
          exact: true
        }

      ]
    }
  }

}
</script>
  

  