<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Prénom et Nom" outlined dense v-model="model.name"
            :rules="rules.firstnameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Adresse Email" outlined dense v-model="model.email"
            :rules="rules.emailRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Téléphone" outlined dense v-model="model.telephone"
            :rules="rules.telephoneRules"></v-text-field>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete v-model="model.roles" :items="listroles.filter(item => (item && item.name != 'super_admin'))"
            :rules="rules.rolesRules" outlined dense multiple small-chips label="Rôle" item-text="description"
            item-value="id" clearable return-object @change="changeRole">
          </v-autocomplete>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete v-model="model.structure_id"
            :rules="this.showFournisseur == true ? rules.fournisseur_services_idRules : null" :items="liststructures" outlined
            dense label="Structure" item-text="nom_structure" item-value="id" return-object v-if="showFournisseur">
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
    this.$store.dispatch('structures/getSelectList')
  },
  computed:
    mapGetters({
      listroles: 'roles/selectlistroles',
      liststructures: 'structures/selectliststructures'
    }),
  data: () => ({
    loading: false,
    message: null,
    valid: true,
    showFournisseur: false,
    model: {
      id: null,
      avatar: '',
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      roles: null,
      fournisseur_services_id: null,
      country_code: '+229',
      telephone: '',
      adresse: '',
      fonction: '',
      structure_id: null
    },
    rules: {
      firstnameRules: [
        (v) => !!v || 'Le prénom est obligatoire',
        (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/.test(v) || "Le prénom ne doit contenir que des caractères alphabétiques et des caractères spéciaux tels que des espaces, des tirets et des apostrophes",
        (v) => (v && v.length <= 50) || "Le prénom ne doit pas dépasser 50 caractères",
        (v) => (v && v.length >= 2) || "Le prénom doit contenir au moins 2 caractères"
      ],
      lastnameRules: [
        (v) => !!v || 'Le nom est obligatoire',
        (v) => /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/.test(v) || "Le nom ne doit contenir que des caractères alphabétiques et des caractères spéciaux tels que des espaces, des tirets et des apostrophes",
        (v) => (v && v.length <= 50) || "Le nom ne doit pas dépasser 50 caractères",
        (v) => (v && v.length >= 2) || "Le nom doit contenir au moins 2 caractères"
      ],
      emailRules: [
        v => !!v || 'L\'adresse e-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
      ],
      usernameRules: [
        v => !!v || 'Login est obligatoire',
        v => (v && v.length <= 10) || 'Login doit être inférieur à 10 caractères',
      ],
      rolesRules: [
        v => (v && !!v.length) || 'Le rôle est obligatoire',
      ],
      telephoneRules: [
        (v) => !!v || 'Le numéro de téléphone est obligatoire',
        (v) => /^[0-9]+$/.test(v) || "Le numéro de téléphone ne doit contenir que des chiffres",
        (v) => (v && v.length >= 8 && v.length <= 20) || "Le numéro de téléphone doit contenir entre 8 et 20 chiffres"
      ],
      country_codeRules: [
        v => !!v || 'L\'indicatif du pays est obligatoire',
      ],
      fournisseur_services_idRules: [
        v => (!!v) || 'Fournisseur est obligatoire',
      ],
      structure_idRules: [
        v => (!!v) || 'Structure est obligatoire',
      ],
      adresseRules: [
        v => !!v || 'Adresse est obligatoire',
        v => (v && v.length <= 100) || 'Adresse doit être inférieur à 50 caractères',
      ],
      nationalityRules: [
        v => !!v || 'Nationalité est obligatoire',
        v => (v && v.length <= 50) || 'Nationalité doit être inférieur à 15 caractères',
      ],
      date_of_birthRules: [
        v => !!v || 'Date de naissance est obligatoire',
      ],
      place_of_birthRules: [
        v => !!v || 'Lieu de naissance est obligatoire',
        v => (v && v.length <= 50) || 'Lieu de naissance doit être inférieur à 50 caractères',
      ],
      type_identificationRules: [
        v => !!v || 'Type d\'identification est obligatoire',
      ],
      numero_identificationRules: [
        v => !!v || 'Numéro d\'identification est obligatoire'
      ],
      fonctionRules: [
        v => !!v || 'Fonction est obligatoire'
      ]
    },
  }),
  methods: {
    getDetail(id) {
      this.progress = true
      this.$gecApi.$get('/users/' + id)
        .then(async (response) => {
          this.$store.dispatch('utilisateurs/getDetail', response.data)
          this.model.id = response.data.id
          this.model.name = response.data.name
          this.model.email = response.data.email
          this.model.roles = response.data.roles
          this.model.structure_id = response.data.structures[0]?.id
          await this.changeRole()
        }).catch((error) => {
          this.$toast.error(error?.response?.data?.message).goAway(3000)
        })
    },
  
    submitForm() {
      let validation = this.$refs.form.validate()
      let selectedRoles = this.model.roles.map((item) => { return item.id })
      this.model.roles = selectedRoles
      this.loading = true;
      validation && this.$gecFileApi.put('/users/' + this.model.id, { ...this.model, roles: selectedRoles, ...this.model.avatar })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Modification réussie' })
          this.$router.push('/utilisateurs');
        })
        .catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la modification ' })
        }).finally(() => {
          this.loading = false;
        });
    },
   
    async changeRole() {
      let checkRole = this.model.roles.filter(item => (item && item.name === 'point_focal' || item && item.name === 'admin_structure' || item && item.name === 'DGES' || item && item.name === 'directeur_eps')).length;
      if (checkRole == 1)
        this.showFournisseur = true
      else
        this.showFournisseur = false
    },
  },
}
</script>