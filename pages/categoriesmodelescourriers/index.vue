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
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListCategoriesModelesCourriers from '@/components/categoriesmodelescourriers/ListCategoriesModelesCourriers'
export default {
  layout: "dashboard",
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-parametres')) {
      return redirect('/')
    }
  },
  components: {
    LeftMenu,
    PageHeader,
    ListCategoriesModelesCourriers
  },
  mounted: function () {
    this.$store.dispatch('categoriesmodelescourriers/getList')
  },
  data() {
    return {
      selectedItem: 0,
      leftmenuItems: [
        { text: 'Rôles', icon: 'mdi-lock', link: '/roles', position: 1 },
        { text: 'categoriesmodelescourriers', icon: 'mdi-lock', link: '/categoriesmodelescourriers', position: 2 }
      ],
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

<style scoped></style>
