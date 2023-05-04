<template>
  <v-card class="custom-card-user border-user">                   
    <v-card-text class="custom-card-body">
      <v-row row wrap>
        <v-col cols="8" class="text-md-left">
          <h4 class="card-title custom-font">Nombre total d'utilisateurs actifs</h4> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </v-col>
        <v-col cols="4" class="text-md-left">
          <v-avatar size="100px" color="#00ac47">
            <v-icon color="white" x-large>mdi-account-group-outline</v-icon>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="8" class="text-md-left"><p class="card-chiffre">2345</p></v-col>
        <v-col cols="4" class="text-md-right"><v-icon color="grey" x-large>mdi-chevron-right</v-icon></v-col>
      </v-row>
    </v-card-actions>
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