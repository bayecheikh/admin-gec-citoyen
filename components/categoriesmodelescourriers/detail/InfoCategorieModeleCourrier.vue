<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>

        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">

              <p class="info-profil mb-4"><span>Nom : </span>{{ detailcategoriemodelecourrier.name }}</p>

            </div>

          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    detailcategoriemodelecourrier: 'categoriesmodelescourriers/detailcategoriemodelecourrier'
  }),

  created() {

  },

  methods: {
    submitForm() {
      alert('Formulaire soumis')
    },
    retour() {
      this.$router.push('/categoriesmodelescourriers');
    },
  },
}
</script>

<style scoped>
.border-left {
  border-left: solid 2px rgb(0 0 0 / 4%);
  ;
}
</style>