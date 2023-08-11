<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Prénom et nom" outlined dense v-model="model.name" :rules="rules.nameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Adresse Email" outlined dense v-model="model.email"
            :rules="rules.emailRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Téléphone" outlined dense v-model="model.telephone"
            :rules="rules.telephoneRules"></v-text-field>
        </v-col>
<<<<<<< HEAD
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete v-model="model.structure_id"
            :rules="this.showFournisseur == true ? rules.fournisseur_services_idRules : null" :items="liststructures" outlined
            dense label="Structure" item-text="nom_structure" item-value="id" return-object v-if="showFournisseur">
=======
        <v-col md="6" lg="6" sm="12">
          <v-select label="Sexe" outlined dense v-model="model.sexe" :items="sexOptions"></v-select>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Adresse" outlined dense v-model="model.adresse" :rules="rules.adresseRules"></v-text-field>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete  v-if="!hasSuperAdminRole" v-model="model.roles" :items="listroles.filter(item => (item && item.slug != 'super-admin'))"
            :rules="rules.rolesRules" outlined dense multiple small-chips label="Rôle" item-text="name" item-value="id"
            clearable return-object>
>>>>>>> yacine-v41
          </v-autocomplete>
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
<<<<<<< HEAD
  computed:
    mapGetters({
      liststructures: 'structures/selectliststructures'
=======
  computed: {
    ...mapGetters({
      listroles: 'roles/selectlistroles',
>>>>>>> yacine-v41
    }),
  
  },
    
  data: () => ({
    sexOptions: ['Homme', 'Femme'],
    loading: false,
    message: null,
    valid: true,
    model: {
      id: null,
      name: '',
      email: '',
<<<<<<< HEAD

      fournisseur_services_id: null,
      country_code: '+229',
=======
      sexe: '',
      roles: null,
>>>>>>> yacine-v41
      telephone: '',
      adresse: '',
    },
    rules: {
      nameRules: [
        (v) => !!v || 'Le nom est obligatoire',
        (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/.test(v) || "Le nom ne doit contenir que des caractères alphabétiques et des caractères spéciaux tels que des espaces, des tirets et des apostrophes",
        (v) => (v && v.length <= 100) || "Le nom ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "Le nom doit contenir au moins 2 caractères"
      ],
      emailRules: [
        v => !!v || 'L\'adresse e-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
      ],
<<<<<<< HEAD
      usernameRules: [
        v => !!v || 'Login est obligatoire',
        v => (v && v.length <= 10) || 'Login doit être inférieur à 10 caractères',
=======
      rolesRules: [
        v => (v && !!v.length) || 'Le rôle est obligatoire',
>>>>>>> yacine-v41
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
      adresseRules: [
        v => (!v || v.length <= 100) || 'L\'adresse ne doit pas dépasser 100 caractères',
      ],
    },
  }),
  methods: {
    getDetail(id) {
      let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');
      let headers = {
        Authorization: authToken,
      };
      this.progress = true
      this.$gecApi.$get('/users/' + id, { headers })
        .then(async (response) => {
<<<<<<< HEAD
          this.$store.dispatch('utilisateurs/getDetail', response.data)
          this.model.id = response.data.id
          this.model.name = response.data.name
          this.model.email = response.data.email
          this.model.structure_id = response.data.structures[0]?.id
=======
          this.$store.dispatch('utilisateurs/getDetail', response.data.data)
          this.model.id = response.data.data._id
          this.model.name = response.data.data.name
          this.model.email = response.data.data.email
          this.model.telephone = response.data.data.telephone
          this.model.adresse = response.data.data.adresse
          this.model.sexe = response.data.data.sexe
          this.model.roles = response.data.data.roles
>>>>>>> yacine-v41
        }).catch((error) => {
          this.$toast.error(error?.response?.data?.message).goAway(3000)
        })
    },

    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
<<<<<<< HEAD
      validation && this.$gecFileApi.put('/users/' + this.model.id, { ...this.model, ...this.model.avatar })
=======
      let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');
      let headers = {
        Authorization: authToken,
      };
      validation && this.$gecApi.patch('/users/' + this.model.id, { ...this.model, roles: selectedRoles }, { headers })
>>>>>>> yacine-v41
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: 'Modification réussie' })
          this.$router.push('/utilisateurs');
        })
        .catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la modification ' })
        }).finally(() => {
          this.loading = false;
        });
    },
<<<<<<< HEAD
   
=======

>>>>>>> yacine-v41
  },
}
</script>