<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-contenu-dynamique></info-contenu-dynamique>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-contenus-dynamiques></actions-contenus-dynamiques>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import InfoContenuDynamique from '@/components/contenusdynamiques/detail/InfoContenuDynamique';
import ActionsContenusDynamiques from '@/components/contenusdynamiques/detail/ActionsContenusDynamiques';
export default {
  layout: "dashboard",
  components: {
    
    PageHeader,
    InfoContenuDynamique,
    ActionsContenusDynamiques
  },
  
  data() {
    return {
      headerItems: [
        {
          text: 'Contenus dynamiques',
          disabled: false,
          to: '/contenusdynamiques',
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


