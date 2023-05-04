<template>
  <v-card class="custom-card-user border-grey">                   
    <v-tabs vertical class="bg-grey">
      <v-tab class="text-left">
        <v-icon left>
          mdi-account-network-outline
        </v-icon>
        Procédures des ESS
      </v-tab>
      <v-tab class="text-left">
        <v-icon left>
          mdi-web
        </v-icon>
        Procédures en ligne
      </v-tab>
      <v-tab class="text-left">
        <v-icon left>
          mdi-briefcase-outline
        </v-icon>
        Projets
      </v-tab>
      <v-tab class="text-left">
        <v-icon left>
          mdi-account-outline
        </v-icon>
        Emplois
      </v-tab>
      <v-tab class="text-left">
        <v-icon left>
          mdi-handshake-outline
        </v-icon>
        Formations
      </v-tab>

      <v-tab-item>
        <table-demande :tab="'tout'"></table-demande>
      </v-tab-item>
      <v-tab-item>
        <!-- <table-demande :tab="'tout'"></table-demande> -->
      </v-tab-item>
      <v-tab-item>
        <!-- <table-demande :tab="'tout'"></table-demande> -->
      </v-tab-item>
      <v-tab-item>
        <!-- <table-demande :tab="'tout'"></table-demande> -->
      </v-tab-item>
      <v-tab-item>
        <!-- <table-demande :tab="'tout'"></table-demande> -->
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import TableDemande from '@/components/demandes/TableDemande'
import { mapMutations, mapGetters } from 'vuex'
  export default {
    components: {
      TableDemande
    },
    computed: mapGetters({
      detailUsager: 'usagers/detailusager'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/usagers');
      },
    },
  }
</script>
<style scoped>
.text-left{
  justify-content: left !important;
}
.bg-grey .v-item-group{
  background-color: #f5f5f5 !important;
}
</style>