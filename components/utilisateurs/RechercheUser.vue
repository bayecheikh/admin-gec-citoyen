<template>
  <v-form class=" mt-5 row" v-model="valid" ref="form" enctype="multipart/form-data">
    <!-- <v-col md="12" lg="12" sm="12">
        <v-radio-group
          v-model="model.sexe"
          row
        >
          Sexe : &nbsp; &nbsp;<v-radio
            label="Masculin"
            value="Masculin"
          ></v-radio>
          <v-radio
            label="Feminin"
            value="Feminin"
          ></v-radio>
        </v-radio-group>
      </v-col> -->
    <v-col md="6" lg="6" sm="12" class="mb-0 pb-0 d-flex">
      <v-text-field ref="inputRef" label="Rechercher un utilisateur" outlined dense v-model="model.dataSearch"
        :rules="rules.dataSearchRules" placeholder="Email, Prénom, Nom" clearable :clear-icon-cb="onClearClicked"
        rounded></v-text-field>

    </v-col>
    <!-- <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Nom"
          outlined dense
          v-model="model.lastname"
          :rules="rules.lastnameRules"
        ></v-text-field>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Adresse Email"
          outlined dense
          v-model="model.email"
          :rules="rules.emailRules"
        ></v-text-field>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Login"
          outlined dense
          v-model="model.email"
          :rules="rules.emailRules"
        ></v-text-field>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Profession"
          outlined dense
          v-model="model.fonction"
          :rules="rules.fonctionRules"
        ></v-text-field>
      </v-col>
      <v-col lg="6" sm="12" md="6">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="model.date_of_birth"
              label="Date de naissance"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              outlined dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="model.date_of_birth"
            @input="menu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Lieu de naissance"
          outlined dense
          v-model="model.place_of_birth"
          :rules="rules.place_of_birthRules"
        ></v-text-field>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Adresse"
          outlined dense
          v-model="model.address"
          :rules="rules.addressRules"
        ></v-text-field>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Téléphone"
          outlined dense
          v-model="model.telephone"
          :rules="rules.telephoneRules"
        ></v-text-field>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Nationnalité"
          dense outlined
          v-model="model.nationality"
          :rules="rules.nationalityRules"
        ></v-text-field>
      </v-col> 
      <v-col
        lg="6"
        md="6"
        sm="12"
      >
        <v-select
          v-model="model.type_identification"
          :rules="rules.type_identificationRules"
          :items="typePieces"
          label="Type de pièce"
          dense outlined
          select
        ></v-select>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Numéro d'identification"
          outlined dense
          v-model="model.numero_identification"
          :rules="rules.numero_identificationRules"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col
        lg="6"
        md="6"
        sm="12"
      >
        <v-select
          v-model="model.type_profil_id"
          :rules="rules.type_profil_idRules"
          :items="listprofils" 
          label="Type de profil"
          dense outlined
          item-text="libelle"
          item-value="id"
          select
        ></v-select>
      </v-col>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
          v-show="false"
          label="Structure ID"
          outlined dense
          desabled
          v-model="model.structure_id"
        ></v-text-field>
      </v-col>-->
    <!-- <v-col
        lg="6"
        md="6"
        sm="12"
      >
        <v-select
          v-model="value"
          :items="roles"
          
          label="Rôles"
          outlined dense
        ></v-select>
      </v-col> -->
    <!-- <v-col
        lg="6"
        md="6"
        sm="12"
      >
        <v-select
          v-model="value"
          :items="localisations"
          
          label="Localisation"
          multiple
          outlined dense
        ></v-select>
      </v-col> -->
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
        v => /^[a-zA-Z0-9-_ @.+]+$/.test(v) || 'Champ obligatoire'
      ],
      firstnameRules: [
        v => !!v || 'Champ obligatoire'
      ],
      lastnameRules: [
        v => !!v || 'Nom est obligatoire',
        v => /^[a-zA-Z0-9-_ ]+$/.test(v) || 'Nom incorrecte',
      ],
      emailRules: [
        v => !!v || 'E-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'E-mail mdoit etre valide',
      ],
      usernameRules: [
        v => !!v || 'Login est obligatoire',
        v => /^[a-zA-Z0-9-_]+$/.test(v) || 'Nom incorrecte',
      ],
      type_profil_idRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Type profile incorrecte',
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
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Lieu de naissance incorrecte',
      ],
      type_identificationRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Type d\'identification incorrecte',
      ],
      numero_identificationRules: [
        v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Numéro d\'identification incorrecte',
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
