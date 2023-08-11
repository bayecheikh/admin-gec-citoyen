<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Nom" outlined dense v-model="model.name" :rules="rules.nameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Description" outlined dense v-model="model.description"
            :rules="rules.descriptionRules"></v-text-field>
        </v-col>
      </v-row>
      <v-btn :loading="loading" :disabled="!valid" depressed class="mr-4 text-white" color="#1B73E8" @click="submitForm">
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
      description: ''
    },
    rules: {
      nameRules: [
        v => !!v || 'Le nom est obligatoire',
        v => (v && v.length <= 100) || 'Le nom ne doit pas contenir plus de 100 caractères',
        v => (v && v.length >= 2) || 'Le nom doit contenir au moins 2 caractères',
      ],
      descriptionRules: [
        v => !!v || 'La description est obligatoire',
        v => (v && v.length <= 500) || 'La description ne doit pas contenir plus de 500 caractères',
        v => (v && v.length >= 2) || 'La description doit contenir au moins 2 caractères',
      ],
    },
  }),
  methods: {
    submitForm() {
      this.loading = true;
      let validation = this.$refs.form.validate()
      validation && this.$gecApi.post('/permissions', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/permissions');
        })
        .catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de l\'ajout ' })
        }).finally(() => {
          this.loading = false;
        });
    },
  }
}
</script>