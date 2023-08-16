<template>
  <v-row align="center" justify="space-around">
    <!-- <v-btn text outlined rounded color="primary" v-on:click="retour()">
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour
    </v-btn> -->
    <v-btn text rounded outlined v-on:click="modifier()">
      <v-icon left>
        mdi-pencil
      </v-icon>
      Modifier les infos
    </v-btn>
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{}">
        <v-btn text outlined rounded color="red" v-on:click="reinitialiser()">
          <v-icon left>
            mdi-lock-reset
          </v-icon>
          Réinitialiser le mot de passe
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-form class="row text-align-center pt-15 pb-15" v-model="valid" ref="form" lazy-validation>
              <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" dense outlined
                :type="showPasswordCurrent ? 'text' : 'password'"
                name="passwordCurrent" label="Mot de passe actuel" id="passwordCurrent"
                v-model="model.passwordCurrent" :rules="rules.passwordCurrentRules">
    <template v-slot:append>
      <v-icon @click="togglePasswordCurrentVisibility">
        {{ showPasswordCurrent ? 'mdi-eye-off' : 'mdi-eye' }}
      </v-icon>
    </template>
  </v-text-field>
  <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" dense outlined
                :type="showPassword ? 'text' : 'password'"
                name="password" label="Nouveau mot de passe" id="password"
                v-model="model.password" :rules="rules.passwordRules">
    <template v-slot:append>
      <v-icon @click="togglePasswordVisibility">
        {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
      </v-icon>
    </template>
  </v-text-field>
  <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" dense outlined
                :type="showPasswordConfirm ? 'text' : 'password'"
                name="passwordConfirm" label="Confirmer mot de passe" id="passwordConfirm"
                v-model="model.passwordConfirm" :rules="rules.passwordConfirmRules">
    <template v-slot:append>
      <v-icon @click="togglePasswordConfirmVisibility">
        {{ showPasswordConfirm ? 'mdi-eye-off' : 'mdi-eye' }}
      </v-icon>
    </template>
  </v-text-field>
              <v-spacer></v-spacer>
              <div class="layout column align-center col-md-12 col-lg-12 col-sm-12 pt-0">
                <v-btn depressed rounded block color="primary" class="pl-10 pr-10" @click="submitForm"
                  :loading="loading">Enregistrer</v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted: function () {
    this.model.email = this.detailUtilisateur.email
  },
  computed: {
    ...mapGetters({
      detailUtilisateur: 'utilisateurs/detailutilisateur'
    }),
    confirm_passwordRules() {
      return [
        v => !!v || 'La confirmation du mot de passe est obligatoire.',
        v => (v && v.length >= 8) || 'Le mot de passe doit contenir au moins 8 caractères.',
        v => v === this.model.password || 'Les mots de passe ne sont pas identiques',
      ];
    },
  },
  data: () => ({
    showPassword: false,
    showPasswordConfirm: false,
    showPasswordCurrent: false,
    loading: false,
    dialog: false,
    model: {
      email: '',
      passwordCurrent: '',
      password: '',
      passwordConfirm: '',
    },
    rules: {
      passwordRules: [
        v => !!v || 'Le mot de passe est obligatoire.',
        v => (v && v.length >= 8) || 'Le mot de passe doit contenir au moins 8 caracteres',
      ],
    },
  }),
  methods: {
    togglePasswordCurrentVisibility() {
      this.showPasswordCurrent= !this.showPasswordCurrent;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    togglePasswordConfirmVisibility() {
      this.showPasswordConfirm = !this.showPasswordConfirm;
    },
    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      let authToken = 'Bearer ' + localStorage.getItem('gecAdminToken');
      let headers = {
        Authorization: authToken,
      };
      validation && this.$gecApi.patch('/users/updateMyPassword', { ...this.model }, { headers })
        .then((res) => {
          this.message = res.data?.data?.message
          this.color = 'success'
          this.$store.dispatch('toast/getMessage', { type: 'success', text: "Mot de passse réinitialisé !" })
        })
        .catch((error) => {
          this.message = error.response?.data?.message || 'Échec de la mise à jour'
          this.color = 'red'
        }).finally(() => {
          this.loading = false;
          this.dialog = false
        });
    },
    retour() {
      this.$router.push('/');
    },
    modifier() {
      this.$router.push('/profil/modifier/' + this.detailUtilisateur._id);
    },
    reinitialiser() {
      this.dialog = true
    },
  },
}
</script>