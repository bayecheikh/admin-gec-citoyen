<template>
  <v-card class="custom-card-user border-module">                   
    <v-card-text class="custom-card-body">
      <v-row>
        <v-col cols="8" class="text-md-left">
          <h4 class="card-title custom-font">Nombre de dossiers délivrés</h4> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </v-col>
        <v-col cols="4" class="text-md-right">
          <v-avatar size="100px" color="#007cf6">
            <v-icon color="white" x-large>mdi-moped-outline</v-icon>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="8" class="text-md-left"><p class="card-chiffre text-blue">567</p></v-col>
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