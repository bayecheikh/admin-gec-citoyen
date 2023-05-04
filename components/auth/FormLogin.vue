<template>
  <v-app id="login" >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md3 lg3>
            <v-card flat class="elevation-0 pl-5 pr-5 pt-0 pb-0 border-grey">
              <v-card-text>
                <div class="layout column align-center py-5">
                  <img src="@/static/logo.png" alt="Espace Senegal Service" width="250" height="">
                  <p class="flex my-8 custom-font-mark">Connectez-vous</p>
                </div>
                <v-form class="row text-align-center pt-0" ref="form">
                  <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" dense outlined append-icon="mdi-account-outline" name="email" label="Adresse e-mail" type="text"
                                v-model="model.email" :rules="rules.emailRules"></v-text-field>
                  <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" dense outlined append-icon="mdi-lock-outline" name="password" label="Mot de passe" id="password" type="password"
                                v-model="model.password" :rules="rules.passwordRules"></v-text-field>
                  <div class="col-md-12 col-lg-12 col-sm-12 pl-0 pr-4 pt-0 pb-0 d-flex justify-content-around pt-0 mt-0">
                      <v-checkbox dense v-model="checkbox" rounded class="pl-3 pt-0 mt-0">
                        <template v-slot:label>
                            <div class="caption pt-0 mt-0">
                            Restez connecter
                            </div>                                 
                        </template>
                      </v-checkbox>
                      <form-send-mail></form-send-mail>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="layout column align-center col-md-12 col-lg-12 col-sm-12 pt-0">
                    <v-btn depressed rounded block color="primary" class="pl-10 pr-10" @click="login" :loading="loading" :disabled="!valid">Se connecter</v-btn>
                  </div>
                </v-form>   
              </v-card-text>               
            </v-card>
            
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FormSendMail from '@/components/auth/FormSendMail'
import layoutadmin from '@/static/data/layoutadmin'
import layoutchargeclientel from '@/static/data/layoutchargeclientel'
  export default {
    /* middleware:'guest', */
    components: {
      FormSendMail
    },
    data: () => ({
      valid: true,
      dialog: false,
      checkbox:true,
      loading: false,
      color:null,
      message:null,
      model: {
        email: '',
        password: '',
      },
       rules:{
        passwordRules: [
          v => !!v || 'Mot de passe est obligatoire',
          v => (v && v.length >= 4) || 'Mot de passe doit etre superieur a 3 caracteres',
        ],
        emailRules: [
          v => !!v || 'E-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail mdoit etre valide',
        ]
      },
    }),

    methods: {
      async login() {
        let validation = this.$refs.form.validate()
        
          this.loading = true;
          console.log('Données formulaire ++++++++++++++++++++++++++',{
              email: this.model.email,
              password: this.model.password
            })
          validation && await this.$axios.post('login', {
              email: this.model.email,
              password: this.model.password
          }).then(async (response) => { 
            console.log('Utilisateur connecté++++++++++++++++++++++++++',response.data)

            await localStorage.setItem('msasToken', response.data.token)
            await localStorage.setItem('loggedInUser', JSON.stringify(response.data.user))
            await localStorage.setItem('isAuthenticated', true)       
            this.$router.push('/parametres');
          }).
          catch((error) => {
              console.log('Code error ++++++: ', error.response)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error.response.data.message || 'Echec de la connexion'})
          }).finally(() => {
            this.loading = false;
            console.log('Requette envoyé ')
          }); 
      }
    }

  };
</script>
<style scoped lang="css">
  #login {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
    background-image: url('@/static/background.png');
    background-size: cover;
    background-position: top;
  }
  .custom-font-mark{
    font-family: "MarkProBook";
    font-size: 28px;
    color:#000;
    letter-spacing: -2px;
  }
  .v-btn {
    min-width: 0 !important;
  }
  .v-input .v-label {
    font-family: "MarkProBook";
    font-size: 8px !important;
  }
  .text-decoration-none{
    text-decoration: none !important;
    color: rgba(0, 0, 0, 0.6) !important;
  }
  .custom-text-small{
    font-size: 10px !important;
  }

</style>
