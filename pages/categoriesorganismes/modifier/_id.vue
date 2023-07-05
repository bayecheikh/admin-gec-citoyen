<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-categorie-organisme></form-update-categorie-organisme>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateCategorieOrganisme from '@/components/categoriesorganismes/modifier/FormUpdateCategorieOrganisme';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateCategorieOrganisme
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-roles')) {
      return redirect('/')
    }
  },
  mounted: function () {
    this.$store.dispatch('categoriesorganismes/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Type d\'organisme',
          disabled: false,
          to: '/categoriesorganismes',
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


