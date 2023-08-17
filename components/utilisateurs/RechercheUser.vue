<template>
  <v-form class=" mt-5 row" v-model="valid" ref="form" enctype="multipart/form-data">
    <v-col md="6" lg="6" sm="12" class="mb-0 pb-0 d-flex">
      <v-text-field ref="inputRef" label="Rechercher un utilisateur" outlined dense v-model="model.dataSearch"
        :rules="rules.dataSearchRules" placeholder="Email, Prénom, Nom" clearable :clear-icon-cb="onClearClicked"
        rounded></v-text-field>

    </v-col>
    <v-col lg="3" md="3" sm="12" class="d-flex">
      <v-btn :loading="loading" :disabled="!valid" class="mr-4 text-white" color="#1B73E8" @click="submitForm" depressed
        rounded>
        Rechercher
      </v-btn>
      <v-btn text @click="onClearClicked" rounded color="red">Réinitialiser</v-btn>
    </v-col>
  </v-form>
</template>
<script>

export default {

  data: () => ({
    loading: false,
    message: null,
    valid: true,
    progress: true,
    items: [],
    page: 1,
    totalPages: 1,
    model: {
      avatar: '',
      sexe: 'Masculin',
      dataSearch: '',
      firstname: '',
      lastname: '',
      email: 'tesdddddddddt@gouv.bj',
      username: '',
      type_profil_id: 'citoyen',
      telephone: '0554525152',
      address: 'Cotonou',
      nationality: 'béninoise',
      date_of_birth: '1988-09-24',
      place_of_birth: '',
      type_identification: 'cin',
      numero_identification: '',
      fonction: 'Devops',
      structure_id: JSON.parse(localStorage.getItem('gecAdminLoggedInUser')).id
    },
    rules: {
      dataSearchRules: [
        v => /^[a-zA-Z0-9-_ @.+]+$/.test(v) || 'Champ obligatoire.'
      ],
      firstnameRules: [
        v => !!v || 'Champ obligatoire.'
      ],
      lastnameRules: [
        v => !!v || 'Nom est obligatoire.',
        v => /^[a-zA-Z0-9-_ ]+$/.test(v) || 'Nom incorrecte',
      ],
      emailRules: [
        v => !!v || 'E-mail est obligatoire.',
        v => /.+@.+\..+/.test(v) || 'E-mail doit etre valide',
      ],
      usernameRules: [
        v => !!v || 'Login est obligatoire.',
        v => /^[a-zA-Z0-9-_]+$/.test(v) || 'Nom incorrect',
      ],
      type_profil_idRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Type profil incorrect',
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
      addressRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Adresse incorrecte',
      ],
      nationalityRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Nationalité incorrecte',
      ],
      date_of_birthRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Date de naissance incorrecte',
      ],
      place_of_birthRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Lieu de naissance incorrect',
      ],
      type_identificationRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Type d\'identification incorrect',
      ],
      numero_identificationRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Numéro d\'identification incorrect',
      ],
      fonctionRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Fonction incorrecte',
      ],
      structure_idRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Structure incorrecte',
      ]
    },
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
  }),
  methods: {
    onClearClicked() {
      this.$refs.inputRef.clearableCallback()
      this.page = 1
      this.getList()
    },
    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      this.$store.commit('utilisateurs/initdatasearch', this.model.dataSearch)
      validation && this.getResult(1, this.model.dataSearch)
    },
    getList() {
      this.page = 1
      this.progress = true
      this.$store.dispatch('utilisateurs/getDataSearch', null)
      let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');

let headers = {
  Authorization: authToken, 
};
      this.$gecApi.$get('/users/back-office-users?page=1', {headers})
        .then(async (response) => {
          this.page = 1
          let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
          this.$store.dispatch('utilisateurs/getTotalPage', totalPages)
          this.$store.dispatch('utilisateurs/getPerPage', response.data.data.per_page)
          this.$store.dispatch('utilisateurs/getList', response.data.data)
        }).catch((error) => {
          /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
          this.$toast.error(error?.response?.data?.message).goAway(3000)
        }).finally(() => {
          this.progress = false
        });
    },
    getResult(page, param) {
      this.page = 1
      this.progress = true
      this.$gecApi.get('/user-multiple-search/' + param + '?page=' + page)
        .then(async (response) => {
          await this.$store.dispatch('utilisateurs/getList', response.data.data.data)
          let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
          this.$store.dispatch('utilisateurs/getTotalPage', totalPages)
          this.$store.dispatch('utilisateurs/getPerPage', response.data.data.per_page)

        }).catch((error) => {
          /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
          this.$toast.error(error?.response?.data?.message).goAway(3000)
          
        }).finally(() => {
          this.progress = false;
          this.loading = false;
        });
    },
  },
  
}
</script>
