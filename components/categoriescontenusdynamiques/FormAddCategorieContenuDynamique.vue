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

export default {
  data: () => ({
    loading: false,
    message: null,
    valid: true,
    model: {
      libelle: '',
      description: '',
      id: null,
    },
    rules: {
      libelleRules: [
        (v) => !!v || 'Le libelle de la catégorie est obligatoire',
        (v) => (v && v.length <= 100) || "Le libelle de la catégorie ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "Le libelle de la catégorie doit contenir au moins 2 caractères"
      ],
      descriptionRules: [
        (v) => (!v || v.length <= 500) || "La description ne doit pas dépasser 500 caractères",
      ],
    },
  }),
  methods: {

    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.post('/categorie-contenu/', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/categoriescontenusdynamiques');
        })
        .catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de l\'ajout ' })
        }).finally(() => {
          this.loading = false;
        });
    },
  
  },

}
</script>
    