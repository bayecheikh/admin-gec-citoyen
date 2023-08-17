<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-categorie-modele-courrier></form-update-categorie-modele-courrier>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateCategorieModeleCourrier from '@/components/categoriesmodelescourriers/modifier/FormUpdateCategorieModeleCourrier';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateCategorieModeleCourrier
  },
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-modeles-courriers')) {
      return redirect('/')
    }
  },
=======
 
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260
  mounted: function () {
    this.$store.dispatch('categoriesmodelescourriers/getList')
  },
  data() {
    return {
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


