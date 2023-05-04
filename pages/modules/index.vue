<template>
  <v-container grid-list-xl fluid>
    Modules
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
