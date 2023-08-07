<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-utilisateur></info-utilisateur>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-utilisateur></actions-utilisateur>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
  
<script>

import PageHeader from '@/components/PageHeader';
import InfoUtilisateur from '@/components/profil/detail/InfoUtilisateur';
import ActionsUtilisateur from '@/components/profil/detail/ActionsUtilisateur';
export default {
  layout: "dashboard",
  components: {
    
    PageHeader,
    InfoUtilisateur,
    ActionsUtilisateur
  },
  
  data() {
    return {
      headerItems: [
        {
          text: 'Mon profil',
          disabled: true,
          to: '/utilisateurs',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  