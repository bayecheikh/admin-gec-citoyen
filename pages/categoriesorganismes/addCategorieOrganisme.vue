<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-categorie-organisme></form-add-categorie-organisme>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddCategorieOrganisme from '@/components/categoriesorganismes/FormAddCategorieOrganisme';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddCategorieOrganisme
  },
  

  data() {
    return {
      headerItems: [
        {
          text: 'Types Organismes',
          disabled: false,
          to: '/categoriesorganismes',
          exact: true
        },
        {
          text: 'Nouveau type d\'organisme',
          disabled: false,
          to: '/categoriesorganismes/addCategorieOrganisme',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  