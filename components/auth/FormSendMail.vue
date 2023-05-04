<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <a class="caption ml-5 text-decoration-none custom-text-small py-4"
        href="#"
        v-on="on"
        v-bind="attrs"
        @click="dialog = true"
        >
            Mot de passe oublié
        </a>
      </template>
      <v-card>
        <!-- <v-card-title>
          <span class="text-h5">Recupération compte</span>
        </v-card-title> -->
        <v-card-text>
              <v-form class="row text-align-center pt-10 pb-5"  v-model="valid" ref="form" lazy-validation>
                  <v-text-field class="col-md-12 col-lg-12 col-sm-12 pl-4 pr-4 pt-0" 
                    dense outlined append-icon="mdi-email-outline" 
                    name="email" 
                    label="Saisir votre email" 
                    type="text"
                    v-model="model.email" 
                    :rules="rules.emailRules">
                  </v-text-field>
                  <v-spacer></v-spacer>
                  <div class="flex align-center pt-0">
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Fermer
                    </v-btn>
                    <v-btn depressed rounded color="primary" class="pl-10 pr-10" @click="sendMail" :loading="loading" :disabled="!valid">
                      Soumettre
                    </v-btn>
                  </div>    
              </v-form> 
              <Notification :message="message" :color="color" v-if="message" class="my-5"/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import Notification from '@/components/Notification'
import layoutadmin from '@/static/data/layoutadmin'
import layoutchargeclientel from '@/static/data/layoutchargeclientel'
  export default {
    /* middleware:'guest', */
    layout: 'default',
    components: {
      Notification
    },
    data: () => ({
      valid: true,
      dialog: false,
      checkbox:true,
      loading: false,
      color:null,
      message:null,
      model: {
        email: ''
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
      async sendMail() {
        let validation = this.$refs.form.validate()
        this.loading = true;
        this.color="success"
        console.log('Donées formulaire ++++++ : ',{...this.model})
        
        validation && this.$axios.post('/forget_password',{...this.model})
          .then((res) => {    
            this.$toast.success(res.data.message || 'Vérifiez votre boite de récéption').goAway(4000)
            console.log('Donées reçus ++++++: ',res.data)
             setTimeout(() => {
              this.$router.push('/login');
            }, 1000);
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error.response.data.message)
              this.$toast.error('Erreur').goAway(4000)
          }).finally(() => {
            this.loading = false;
            this.dialog = false
            console.log('Requette envoyé ')
        }); 
      }
    }

  };
</script>
