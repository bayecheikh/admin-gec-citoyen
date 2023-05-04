<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      depressed
      rounded
      color="primary"
      @click="goToProcedure"
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Nouvelle procédure
    </v-btn>
    <v-btn
      depressed
      rounded
      outlined
      color="green"
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Nouveau projet
    </v-btn>
    <v-btn
      depressed
      rounded
      dark
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Demande d'emploi
    </v-btn>
    <v-btn
      depressed
      rounded
      color="green"
      outlined
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Demande formation
    </v-btn>
    <v-btn
      depressed
      rounded
      color="secondary"
    >
      <v-icon left>
        mdi-plus
      </v-icon>
      Adhérer au pole emploi
    </v-btn>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      detailUsager: 'usagers/detailusager'
    }),
    data: () => ({
      listUsagers:[]
    }),
    methods: {
      async goToProcedure(){
        this.listUsagers[0]=this.detailUsager
        await this.$store.dispatch('usagers/getSelectList',this.listUsagers)
        this.$router.push('/demandes/addDemande');
      },
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/usagers');
      },
    },
  }
</script>