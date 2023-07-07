<template>
  <v-row align="center" justify="space-around">
    <v-btn text outlined rounded color="primary" v-on:click="retour()">
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour à la liste
    </v-btn>
    <v-btn text rounded outlined v-on:click="modifier()">
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
    detailcategoriecontenudynamique: 'categoriescontenusdynamiques/detailcategoriecontenudynamique'
  }),
  
  methods: {
    retour() {
      this.$router.push('/categoriescontenusdynamiques');
    },
    modifier() {
      this.$router.push('/categoriescontenusdynamiques/modifier/' + this.detailcategoriecontenudynamique.id);
    },

  },
}
</script>