<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container" flat>
        <list-categories-contenus-dynamiques></list-categories-contenus-dynamiques>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import ListCategoriesContenusDynamiques from '@/components/categoriescontenusdynamiques/ListCategoriesContenusDynamiques'
export default {
  layout: "dashboard",
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-parametres')) {
      return redirect('/')
    }
  },
  components: {
    PageHeader,
    ListCategoriesContenusDynamiques
  },
  mounted: function () {
    this.$store.dispatch('categoriescontenusdynamiques/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Liste des catégories de contenu',
          disabled: true,
          to: '/categoriescontenusdynamiques',
          exact: true
        }
      ]
    }
  }

}
</script>


