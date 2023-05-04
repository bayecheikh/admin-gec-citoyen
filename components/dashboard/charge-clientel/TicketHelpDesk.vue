<template>
  <v-card class="custom-card-user border-tickethelpdesk">                   
    <v-card-text class="custom-card-body">
      <v-row row wrap>
        <v-col cols="8" class="text-md-left">
          <h4 class="card-title custom-font">Tickets help desk</h4> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </v-col>
        <v-col cols="4" class="text-md-left">
          <v-avatar size="100px" color="#fe2b25">
            <v-icon color="white" x-large>mdi-face-agent</v-icon>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="8" class="text-md-left"><p class="card-chiffre text-red">618</p></v-col>
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