<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Prénom" outlined dense v-model="model.firstname"
            :rules="rules.firstnameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Nom" outlined dense v-model="model.lastname" :rules="rules.lastnameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Sexe" outlined dense v-model="model.sexe" :rules="rules.sexeRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Adresse Email" outlined dense v-model="model.email"
            :rules="rules.emailRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Téléphone" outlined dense v-model="model.telephone"
            :rules="rules.telephoneRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Adresse" outlined dense v-model="model.adresse" :rules="rules.adresseRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Mot de passe" outlined dense v-model="model.password"
            :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'" :type="passwordVisible ? 'text' : 'password'"
            @click:append="togglePasswordVisibility" :rules="rules.passwordRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Confirmer mot de passe" outlined dense v-model="model.passwordConfirm"
            :append-icon="passwordConfirmVisible ? 'mdi-eye' : 'mdi-eye-off'"
            :type="passwordConfirmVisible ? 'text' : 'password'" @click:append="togglePasswordConfirmVisibility"
            :rules="getPasswordConfirmRules"></v-text-field>
        </v-col>
        <!-- <v-col
        lg="6"
        md="6"
        sm="12"
      >
      <v-text-field
          label="Rôle"
          dense outlined
          v-model="model.role"
          :rules="rules.roleRules"
        ></v-text-field>
      </v-col> -->
      </v-row>

      <v-btn :loading="loading" :disabled="true" class="mr-4 text-white" color="#1B73E8" @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
    <Notification :message="message" :color="color" v-if="message" class="my-5" />
  </div>
</template>

<script>

import Notification from '@/components/Notification'
export default {
  components: {
    Notification
  },
  computed: {
    getPasswordConfirmRules() {
      return [
        (value) => !!value || 'Veuillez confirmer le mot de passe',
        (value) => value === this.model.password || 'Les mots de passe ne correspondent pas'
      ];
    }
  },
  data: () => ({
    loading: false,
    message: null,
    color: null,
    valid: true,
    model: {
      firstname: '',
      lastname: '',
      adresse: '',
      telephone: '',
      role: 'user',
      passwordConfirm: '',
      sexe: '',
      email: '',
      password: '',
    },
    passwordVisible: false,
    passwordConfirmVisible: false,
    rules: {
      firstnameRules: [
        (v) => !!v || 'Le prénom est obligatoire',
        (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/.test(v) || "Le prénom ne doit contenir que des caractères alphabétiques et des caractères spéciaux tels que des espaces, des tirets et des apostrophes",
        (v) => (v && v.length <= 100) || "Le prénom ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "Le prénom doit contenir au moins 2 caractères"
      ],
      lastnameRules: [
        (v) => !!v || 'Le nom est obligatoire',
        (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/.test(v) || "Le nom ne doit contenir que des caractères alphabétiques et des caractères spéciaux tels que des espaces, des tirets et des apostrophes",
        (v) => (v && v.length <= 100) || "Le nom ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "Le nom doit contenir au moins 2 caractères"
      ],
      roleRules: [
        v => (v && !!v.length) || 'Le rôle est obligatoire',
      ],
      telephoneRules: [
        (v) => /^[0-9]+$/.test(v) || "Le numéro de téléphone ne doit contenir que des chiffres",
        (v) => (v.length >= 8 && v.length <= 20) || "Le numéro de téléphone doit contenir entre 8 et 20 chiffres"
      ],
      emailRules: [
        v => !!v || 'L\'adresse e-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
      ],
      passwordRules: [
        (v) => !!v || 'Le mot de passe est obligatoire',
        (v) => (v && v.length >= 8) || "Le mot de passe doit contenir au moins 8 caractères",
      ],
    },
  }),
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    togglePasswordConfirmVisibility() {
      this.passwordConfirmVisible = !this.passwordConfirmVisible;
    },
    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.post('/users/signup', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data?.message })
          this.$router.push('/utilisateurs');
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
