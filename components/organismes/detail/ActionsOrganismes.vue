<template>
  <v-row align="center" justify="space-around">
    <v-btn flat outlined rounded color="primary" v-on:click="retour()">
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour à la liste
    </v-btn>
    <v-btn flat rounded outlined v-on:click="modifier()">
      <v-icon left>
        mdi-pencil
      </v-icon>
      Modifier les infos
    </v-btn>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    detailorganisme: 'organismes/detailorganisme'
  }),
  
  methods: {
    retour() {
      this.$router.push('/organismes');
    },
    modifier() {
      this.$router.push('/organismes/modifier/' + this.detailorganisme.id);
    },

  },
}
</script>