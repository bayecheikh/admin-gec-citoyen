<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-categorie-contenu-dynamique></form-update-categorie-contenu-dynamique>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateCategorieContenuDynamique from '@/components/categoriescontenusdynamiques/modifier/FormUpdateCategorieContenuDynamique';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateCategorieContenuDynamique
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-roles')) {
      return redirect('/')
    }
  },
  mounted: function () {
    this.$store.dispatch('categoriescontenusdynamiques/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Catégorie de contenu',
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


