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
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
  },
  mounted: function () {
    this.getDetail(this.$nuxt._route.params.id)
    this.$store.dispatch('structures/getSelectList')
  },
  computed:
    mapGetters({
      detailutilisateur: 'utilisateurs/detailutilisateur',
      listroles: 'roles/selectlistroles',
      liststructures: 'structures/selectliststructures'
    }),
  data: () => ({
    loading: false,
    message: null,
    color: null,
    valid: true,
    showFournisseur: false,
    message: null,
    model: {
      id: null,
      avatar: '',
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      roles: null,
      fournisseur_services_id: null,
      country_code: '+221',
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
      adresseRules: [
        v => !!v || 'Adresse est obligatoire',
        v => (v && v.length <= 100) || 'Adresse doit etre inférieur à 50 caratères',
      ],
      nationalityRules: [
        v => !!v || 'Nationalité est obligatoire',
        v => (v && v.length <= 50) || 'Nationalité doit etre inférieur à 15 caratères',
      ],
      date_of_birthRules: [
        v => !!v || 'Date de naissance est obligatoire',
      ],
      place_of_birthRules: [
        v => !!v || 'Lieu de naissance est obligatoire',
        v => (v && v.length <= 50) || 'Lieu de naissance doit etre inférieur à 20 caratères',
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

    imageData: null,
  }),
  methods: {
    getDetail(id) {
      this.progress = true
      this.$gecApi.$get('/users/' + id)
        .then(async (response) => {
          console.log('Detail ++++++++++', response)
          this.$store.dispatch('utilisateurs/getDetail', response.data)
          this.model.id = response.data.id
          this.model.name = response.data.name
          this.model.email = response.data.email
          this.model.roles = response.data.roles
          this.model.structure_id = response.data.structures[0]?.id
          await this.changeRole()
        }).catch((error) => {
          this.$toast.error(error?.response?.data?.message).goAway(3000)
          console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
          console.log('Requête envoyée ')
        });
    },
    handleFileUpload(e) {
      //Recupère le fichier
      const input = this.$refs.file
      const files = input.files

      //Recupère l'extension
      let idxDot = files[0].name.lastIndexOf(".") + 1;
      let extFile = files[0].name.substr(idxDot, files[0].name.length).toLowerCase();
      let size = files[0].size / 1024 / 1024 //La taille en Mbit
      console.log('Size-------------- ', size)

      if (size <= 2 && (extFile == "jpg" || extFile == "jpeg" || extFile == "png")) {
        //Affecté le fichier image au model avatar
        this.model.avatar = e.target.files[0];

        //Prévisualise l'image
        if (files && files[0]) {
          const reader = new FileReader
          reader.onload = e => {
            this.imageData = e.target.result
          }
          reader.readAsDataURL(files[0])
          this.$emit('input', files[0])
        }
      } else {
        alert("Seul les images jpg/jpeg png et de taille inférieur à 2Mb sont acceptés!");
      }
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
          console.log('Code error ++++++: ', error)
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Echec de la modification ' })
        }).finally(() => {
          this.loading = false;
          console.log('Requête envoyée ')
        });
    },
    resetForm() {
      this.$refs.form.reset()
    },
    resetValidationForm() {
      this.$refs.form.resetValidation()
    },
    async changeRole() {

      let checkRole = this.model.roles.filter(item => (item && item.name === 'point_focal' || item && item.name === 'admin_structure' || item && item.name === 'DGES' || item && item.name === 'directeur_eps')).length;
      if (checkRole == 1)
        this.showFournisseur = true
      else
        this.showFournisseur = false
      console.log('************', checkRole)
    },
  },
  metaInfo() {
    return {
      items: this.items,
    }
  }
}
</script>