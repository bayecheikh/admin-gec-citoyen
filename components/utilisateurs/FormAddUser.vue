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
          <v-select label="Sexe" outlined dense v-model="model.sexe" :items="sexOptions"></v-select>
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
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete v-model="model.roles" :items="listroles.filter(item => (item && item.slug != 'super-admin'))"
            :rules="rules.rolesRules" outlined dense multiple small-chips label="Rôle" item-text="name" item-value="id"
            clearable return-object>
          </v-autocomplete>
        </v-col>
      </v-row>

      <v-btn :loading="loading" :disabled="!valid" class="mr-4 text-white" color="#1B73E8" @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
    <Notification :message="message" :color="color" v-if="message" class="my-5" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Notification from '@/components/Notification'
export default {
  components: {
    Notification
  },
  mounted: function () {

    this.$store.dispatch('roles/getList')
  },
  computed: {
    ...mapGetters({
      listroles: 'roles/selectlistroles',
    }),
  },
  data: () => ({
    sexOptions: ['Homme', 'Femme'],
    loading: false,
    message: null,
    color: null,
    valid: true,
    model: {
      firstname: '',
      name: '',
      lastname: '',
      adresse: '',
      telephone: '',
      role: 'user',
      roles: null,
      sexe: '',
      email: '',
    },
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
        (v) => {
          if (!v) return true; // Si le numéro de téléphone est vide, la validation réussit
          return /^[0-9]+$/.test(v) || "Le numéro de téléphone ne doit contenir que des chiffres";
        },
        (v) => {
          if (!v) return true; // Si le numéro de téléphone est vide, la validation réussit
          return (v.length >= 8 && v.length <= 20) || "Le numéro de téléphone doit contenir entre 8 et 20 chiffres";
        }
      ],
      emailRules: [
        v => !!v || 'L\'adresse e-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
      ],
      adresseRules: [
        v => (!v || v.length <= 100) || 'L\'adresse ne doit pas dépasser 100 caractères',
      ]
    },
  }),
  methods: {
    submitForm() {
      let selectedRoles = this.model.roles.map((item) => { return item.id });
      this.model.roles = selectedRoles;
      let validation = this.$refs.form.validate();
      this.loading = true;

      let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');

      let headers = {
        Authorization: authToken,
      };
      let name = this.model.firstname + ' ' + this.model.lastname
      validation && this.$gecApi.post('/users/signup', { ...this.model, roles: selectedRoles, name: name }, { headers })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data?.message });
          this.$router.push('/utilisateurs');
        })
        .catch((error) => {

          this.$store.dispatch('toast/getMessage', { type: 'error', text: error.response.data.message || 'Échec de l\'ajout ' });
        })
        .finally(() => {
          this.loading = false;
        });
    },

  },
}
</script>
