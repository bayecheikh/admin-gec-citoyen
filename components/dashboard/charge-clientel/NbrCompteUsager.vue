<template>
  <v-card class="custom-card-user border-activite">                   
    <v-card-text class="custom-card-body">
      <v-row>
        <v-col cols="8" class="text-md-left">
          <h4 class="card-title custom-font">Nombre de comptes usagers</h4> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </v-col>
        <v-col cols="4" class="text-md-right">
          <v-avatar size="100px" color="#ffba00">
            <v-icon color="white" x-large>mdi-account-group-outline</v-icon>

          </v-avatar>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="8" class="text-md-left"><p class="card-chiffre text-yellow"><v-btn text :loading="true" v-if="!dashboardData.emploi"></v-btn>{{dashboardData.emploi && dashboardData.emploi.boxStats && dashboardData.emploi.boxStats.users}}</p></v-col>
        <v-col cols="4" class="text-md-right"><v-icon color="grey" x-large>mdi-chevron-right</v-icon></v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      dashboardData: 'dashboard/dashboardData'
    }),
    props: ['items'],
    data: () => ({
      
    })
  }
</script>
<style scoped>

</style>