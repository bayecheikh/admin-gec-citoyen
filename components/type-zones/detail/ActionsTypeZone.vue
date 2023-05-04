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
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      detailtypezone: 'type-zones/detailtypezone'
    }),
    data: () => ({

    }),
    methods: {
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
        this.$router.push('/type-zones');
      },
      modifier(){ 
        this.$router.push('/type-zones/modifier/'+this.detailtypezone.id);      
      },
      reinitialiser(){  
        alert('Réinitialiser mot de passe')     
      },
    },
  }
</script>