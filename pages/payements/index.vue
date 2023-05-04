<template>
  <v-container grid-list-xl fluid>
    <nbr-payement-total></nbr-payement-total>
  </v-container>
</template>

<script>
  import NbrPayementTotal from '@/components/statistiques/ministatistiques/accueil/NbrPayementTotal';
  export default {
    layout: "dashboard",
    components: {
      NbrPayementTotal
    }
  }
</script>

<style scoped>

</style>
