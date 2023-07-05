<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Libellé" outlined dense v-model="model.libelle" :rules="rules.libelleRules"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-textarea label="Description" outlined dense v-model="model.description"
            :rules="rules.descriptionRules"></v-textarea>
        </v-col>
      </v-row>
      <v-btn :loading="loading" :disabled="!valid" class="mr-4 text-white" color="#1B73E8" @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>
    
<script>
import { mapGetters } from 'vuex'
export default {
  mounted: function () {
    this.getDetail(this.$nuxt._route.params.id)
  },
  computed: mapGetters({
    listcontenusdynamiquescategories: 'contenusdynamiquescategories/listcontenusdynamiquescategories',
  }),
  data: () => ({
    loading: false,
    color: null,
    valid: true,
    model: {
      libelle: '',
      description: '',
      id: null,
    },
    rules: {
      libelleRules: [
        (v) => !!v || 'Le libellé de la catégorie est obligatoire',
        (v) => (v && v.length <= 100) || "Le libellé de la catégorie ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "Le libellé de la catégorie doit contenir au moins 2 caractères"
      ],
      descriptionRules: [

        (v) => (!v || v.length <= 500) || "La description ne doit pas dépasser 500 caractères",

      ],

    },
  }),
  methods: {
    async getDetail(id) {
      await this.$gecApi.$get('/categorie-contenu/' + id)
        .then(async (response) => {
          this.$store.dispatch('categoriescontenusdynamiques/getDetail', response.data.data)
          this.model.id = response.data.data.id
          this.model.libelle = response.data.data.libelle
          this.model.description = response.data.data.description

        }).catch((error) => {
          this.$toast.error(error?.response?.data?.message).goAway(3000)

        });
    },

    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.patch('/categorie-contenu/' + this.model.id, { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Modification réussie' })
          this.$router.push('/categoriescontenusdynamiques');
        })
        .catch((error) => {

          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la modification ' })
        }).finally(() => {
          this.loading = false;

        });
    },
  },
}
</script>
    