<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-categorie-organisme></info-categorie-organisme>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-categories-organismes></actions-categories-organismes>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import InfoCategorieOrganisme from '@/components/categoriesorganismes/detail/InfoCategorieOrganisme';
import ActionsCategoriesOrganismes from '@/components/categoriesorganismes/detail/ActionsCategoriesOrganismes';
export default {
  layout: "dashboard",
  components: {
    
    PageHeader,
    InfoCategorieOrganisme,
    ActionsCategoriesOrganismes
  },
  
  data() {
    return {
     
      headerItems: [
        {
          text: 'Catégorie d\'organisme',
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


