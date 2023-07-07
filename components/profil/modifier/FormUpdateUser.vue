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
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete v-model="model.roles" :items="listroles" :rules="rules.rolesRules" outlined dense multiple
            small-chips label="Role" item-text="description" item-value="id" clearable return-object @change="changeRole">
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
        v => !!v || 'Prénom est obligatoire',
        v => (v && v.length <= 50) || 'Prénom doit etre inférieur à 20 caratères',
      ],
      lastnameRules: [
        v => !!v || 'Nom est obligatoire',
        v => (v && v.length <= 50) || 'Nom doit etre inférieur à 10 caratères',
      ],
      emailRules: [
        v => !!v || 'E-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'E-mail mdoit etre valide',
      ],
      usernameRules: [
        v => !!v || 'Login est obligatoire',
        v => (v && v.length <= 10) || 'Nom doit etre inférieur à 10 caratères',
      ],
      rolesRules: [
        v => (v && !!v.length) || 'Role est obligatoire',
      ],
      telephoneRules: [
        v => !!v || 'Téléphone est obligatoire',
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