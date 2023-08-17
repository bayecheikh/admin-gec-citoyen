<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container" flat>
        <list-categories-modeles-courriers></list-categories-modeles-courriers>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import ListCategoriesModelesCourriers from '@/components/categoriesmodelescourriers/ListCategoriesModelesCourriers'
export default {
  layout: "dashboard",
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-modeles-courriers')) {
      return redirect('/')
    }
  },
=======
  
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260
  components: {
    
    PageHeader,
    ListCategoriesModelesCourriers
  },
  mounted: function () {
    this.$store.dispatch('categoriesmodelescourriers/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Liste des catégories de modèle courrier',
          disabled: true,
          to: '/categoriesmodelescourriers',
          exact: true
        }
      ]
    }
  }

}
</script>


