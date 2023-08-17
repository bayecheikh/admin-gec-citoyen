<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-modele-courrier></info-modele-courrier>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-modeles-courriers></actions-modeles-courriers>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import InfoModeleCourrier from '@/components/modelescourriers/detail/InfoModeleCourrier';
import ActionsModelesCourriers from '@/components/modelescourriers/detail/ActionsModelesCourriers';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    InfoModeleCourrier,
    ActionsModelesCourriers
  },
  
  data() {
    return {
      headerItems: [
        {
          text: 'Modèles de courrier',
          disabled: false,
          to: '/modelescourriers',
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


