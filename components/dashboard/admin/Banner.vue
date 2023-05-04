<template>
  <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="6" sm="12" lg="6" text-md-left>
          <h4 class="banner-title">Tous les services de l'administration avec un seul compte</h4> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </v-col>
        <v-col md="6" sm="12" lg="6" text-md-center>
          <img src="@/static/banner-1.png" class="banner" alt="Espace Senegal Service">
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: ['items'],
    data: () => ({
      
    })
  }
</script>
<style scoped>

</style>