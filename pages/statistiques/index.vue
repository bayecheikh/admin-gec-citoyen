<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-chart></list-chart>    
    </v-card>
  </div> 
</div>
</template>

<script>
import ListChart from '@/components/statistiques/charts/ListChart';
  export default {
    layout: "dashboard",
    components: {
      ListChart
    }

  }
</script>

<style scoped>

</style>
