<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Nom" outlined dense v-model="model.name" :rules="rules.nameRules"></v-text-field>
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
      name: '',
      id: null,
    },
    rules: {
      nameRules: [
        (v) => !!v || 'Le nom de la catégorie est obligatoire.',
        (v) => (v && v.length <= 100) || "Le nom de la catégorie ne doit pas dépasser 100 caractères.",
        (v) => (v && v.length >= 2) || "Le nom de la catégorie doit contenir au moins 2 caractères."
      ],
    },
  }),
  methods: {
    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.post('/categorie-model-courriers/', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/categoriesmodelescourriers');
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
    