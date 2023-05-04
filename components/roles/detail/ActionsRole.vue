<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
      flat
      outlined
      rounded
      color="primary"
      v-on:click="retour()"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour à la liste
    </v-btn>
    <v-btn
      flat
      rounded
      outlined
      v-on:click="modifier()"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Modifier les infos
    </v-btn>
    <v-btn
      flat
      outlined
      rounded
      color="red"
      v-on:click="reinitialiser()"
    >
      <v-icon left>
        mdi-lock-reset
      </v-icon>
      Réinitialiser le mot de passe
    </v-btn>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      detailrole: 'roles/detailrole'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
        this.$router.push('/roles');
      },
      modifier(){ 
        this.$router.push('/roles/modifier/'+this.detailrole.id);      
      },
      reinitialiser(){  
        alert('Réinitialiser mot de passe')     
      },
    },
  }
</script>