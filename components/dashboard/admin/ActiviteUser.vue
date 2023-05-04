<template>
  <v-card class="custom-card-user border-activite">                   
    <v-card-text class="custom-card-body">
      <v-row>
        <v-col cols="8" class="text-md-left">
          <h4 class="card-title custom-font">Activités des utilisateurs</h4> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </v-col>
        <v-col cols="4" class="text-md-right">
          <v-avatar size="100px" color="#ffba00">
            <v-icon color="white" x-large>mdi-alarm</v-icon>

          </v-avatar>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="8" class="text-md-left"><p class="card-chiffre text-yellow">567</p></v-col>
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