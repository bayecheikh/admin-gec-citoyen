<template>
  <v-container grid-list-xl fluid>
   Profile page
  </v-container>
</template>

<script>
import NbrDemandeActe from '@/components/statistiques/ministatistiques/accueil/NbrDemandeActe';
  export default {
    layout: "dashboard",
    components: {
      NbrDemandeActe
    }

  }
</script>

<style scoped>

</style>
