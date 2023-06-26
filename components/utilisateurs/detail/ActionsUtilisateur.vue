<template>
  <v-row align="center" justify="space-around">
    <v-btn flat outlined rounded color="primary" v-on:click="retour()">
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Retour à la liste
    </v-btn>
    <v-btn flat rounded outlined v-on:click="modifier()">
      <v-icon left>
        mdi-pencil
      </v-icon>
      Modifier les infos
    </v-btn>
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{}">
        <v-btn flat outlined rounded color="red" v-on:click="reinitialiser()">
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
                append-icon="mdi-lock-outline" name="password" label="Nouveau mot de passe" id="password" type="password"
                v-model="model.password" :rules="rules.passwordRules"></v-text-field>
              <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" dense outlined
                append-icon="mdi-lock-outline" name="password_confirmation" label="Confirmer mot de passe"
                id="password_confirmation" type="password" v-model="model.password_confirmation"
                :rules="confirm_passwordRules"></v-text-field>
              <v-spacer></v-spacer>
              <div class="layout column align-center col-md-12 col-lg-12 col-sm-12 pt-0">
                <v-btn depressed rounded block color="primary" class="pl-10 pr-10" @click="submitForm" :loading="loading"
                  :disabled="!valid">Enregistrer</v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  mounted: function () {
    this.model.email = this.detailUtilisateur.email
  },
  computed: mapGetters({
    detailUtilisateur: 'utilisateurs/detailutilisateur'
  }),
  data: () => ({
    loading: false,
    dialog: false,
    model: {
      email: '',
      password: '',
      password_confirmation: '',
    },
    rules: {
      passwordRules: [
        v => !!v || 'Le mot de passe est obligatoire',
        v => (v && v.length >= 8) || 'Le mot de passe doit être supérieur ou égal à 8 caractères',
      ],
      emailRules: [
        v => !!v || 'L\'e-mail est obligatoire',
        v => /.+@.+\..+/.test(v) || 'L\'e-mail doit être valide',
      ]
    },
  }),
  methods: {
    submitForm() {
      let validation = this.$refs.form.validate()
     

      this.loading = true;

      validation && this.$gecApi.post('/update_password', { ...this.model })
        .then((res) => {
          this.message = res.data.message
          this.color = 'success'
          
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message })
        })
        .catch((error) => {
          
          this.message = error.response?.data?.message || 'Echec de la connection'
          this.color = 'red'
        }).finally(() => {
          this.loading = false;
          
          this.dialog = false
        });
    },
    retour() {
      this.$router.push('/utilisateurs');
    },
    modifier() {
      this.$router.push('/utilisateurs/modifier/' + this.detailUtilisateur.id);
    },
    reinitialiser() {
      this.dialog = true
    },
  },
}
</script>