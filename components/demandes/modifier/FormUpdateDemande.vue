<template>
  
  <div class="row">
    <v-form class="text-sm-left col-6" v-model="valid" ref="form">
      <v-row>
        <v-col lg="11" md="11" sm="11" class="pb-0 pt-10">
          <v-autocomplete
          dense
            v-model="model.user_id"
            :rules="rules.user_idRules"
            :items="listusagers"
            outlined
            small-chips
            label="Usager"
            item-text="firstname"
            item-value="id"
            return-object
          >
            <template v-slot:selection="data">
                <v-card
                  class="d-flex align-left flex"
                  flat
                  tile
                >
                  <v-avatar size="50px" class="mt-2 mr-4">
                    <img src="@/static/avatar/user.png" alt="Usager"/>
                  </v-avatar>
                  <div class="mt-4">
                    <h5>{{ data.item.firstname+' '+data.item.lastname }}</h5>
                    <p>Tel: {{ data.item.telephone}}</p>
                  </div>
                </v-card>
            </template>
            <template v-slot:item="data">
                <template>
                  <v-avatar size="50px" class="mt-2 mr-4">
                    <img src="@/static/avatar/user.png" alt="Usager"/>
                  </v-avatar>
                  <div class="mt-4">
                    <h5>{{ data.item.firstname+' '+data.item.lastname }}</h5>
                    <p>Tel: {{ data.item.telephone}}</p>
                  </div>
                </template>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col lg="1" md="1" sm="1" class="pb-0 py-14">
          <template>
            <v-row >
              <v-dialog
                v-model="dialog"
                max-width="800px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                      v-bind="attrs"
                      v-on="on"
                      depressed
                      
                    >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <form-add-usager></form-add-usager>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
        </v-col>
        <v-col lg="12" md="12" sm="12" class="pb-0 pt-0">
          <v-autocomplete
          dense
            v-model="model.codeProcedure"
            :rules="rules.codeProcedureRules"
            :items="listprocedures"
            outlined
            small-chips
            label="Type de procédure"
            item-text="libelle"
            item-value="id"
            return-object
            @change="changeProcedure"
          >
          </v-autocomplete>
        </v-col> 
        <v-col
        lg="6"
        md="6"
        sm="12"
        class="pb-0 pt-0"
      >
        <v-autocomplete
            v-model="model.ess_traitement_id"
            :rules="rules.ess_traitement_idRules"
            :items="liststructures"
            outlined
            dense
            small-chips
            label="ESS de traitement"
            item-text="libelle"
            item-value="id"
          >
        </v-autocomplete>
        </v-col>
        <v-col
        lg="6"
        md="6"
        sm="12"
        class="pb-0 pt-0"
      >
        <v-autocomplete
            v-model="model.ess_retrait_id"
            :rules="rules.ess_retrait_idRules"
            :items="liststructures"
            outlined
            dense
            small-chips
            label="ESS de retrait"
            item-text="libelle"
            item-value="id"
          >
        </v-autocomplete>
        </v-col>
        <v-col
        lg="6"
        md="6"
        sm="12"
        class="pb-0 pt-0"
        >
          <v-autocomplete
              v-model="model.service_traitement_id"
              :items="listfournisseurs"
              :rules="rules.service_traitement_idRules"
              outlined
              dense
              small-chips
              label="Service de traitement"
              item-text="libelle"
              item-value="id"
              clearable
            >
          </v-autocomplete>
        </v-col>
        <!-- <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-text-field
            label="Localité de traitement"
            dense outlined
          ></v-text-field>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-select
            v-model="model.departementCommune"
            :items="departementCommunes"
            label="Departement/Commune"
            outlined
            dense
          ></v-select>
        </v-col> 
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-select
            v-model="model.lieuRetrait"
            :items="lieuRetraits"
            label="Lieu de retrait"
            outlined
            dense
          ></v-select>
        </v-col> 
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-text-field
            label="Adresse de livraison"
            dense outlined
          ></v-text-field>
        </v-col> 
        <v-col lg="12" md="12" sm="12" class="pb-0 pt-0">
          <v-select
            v-model="model.beneficiaire"
            :items="beneficiaires"
            label="Bénéficiaire"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-text-field
            label="Prénom de la personne"
            dense outlined
          ></v-text-field>
        </v-col> 
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-text-field
            label="Nom de la personne"
            dense outlined
          ></v-text-field>
        </v-col>
        <v-col lg="12" md="12" sm="12" class="pb-0 pt-0">
        <v-textarea
            label="Details du dossier"
            dense outlined
          ></v-textarea>
        </v-col>
        <v-col lg="12" md="12" sm="12" class="pb-0 pt-0">
          <v-file-input
              v-model="files"
              color="deep-purple accent-4"
              counter
              label="Pièce joint"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
              dense
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
          </v-file-input>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-select
            v-model="model.etatPayement"
            :items="etatPayements"
            label="Etat payement"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="pb-0 pt-0">
          <v-select
            v-model="model.typePayement"
            :items="typePayements"
            label="Type de payement"
            outlined
            dense
          ></v-select>
        </v-col>  -->
        <v-col lg="12" md="12" sm="12" class="pb-10 pt-0">
           <v-btn
            :loading="loading"
            :disabled="!valid"
            class="mr-4 text-white" color="#1B73E8"
            @click="soumettre"
            rounded
            depressed
          >
            Soumettre
          </v-btn>
          
          <v-btn
            :loading="loading"
            :disabled="!valid"
            class="mr-4 text-white" color="#1B73E8"
            @click="brouillon"
            depressed
          >
            Enregistrer en brouillon
          </v-btn>
         
          <v-btn
            class="mr-4 text-white" color="#000"
            @click="Annuler"
            depressed
          >
            Annuler
          </v-btn>
        </v-col>    
      </v-row>
    </v-form>
    <div class="text-sm-left col-6">
      <v-progress-linear
            color="primary accent-4"
            indeterminate
            rounded
            height="6"
            v-if="processing"
            class="mb-5"
        ></v-progress-linear>
    <v-card
      class="mx-auto"
      outlined
      v-if="activeCard==true"
    >
      <v-list-item three-line>
        <v-list-item-content v-if="hasDocumentation==true">
          
        <div>
            <h2>Titre</h2>
            <p>{{detailProcedure.titre}}</p>           
            <h2>Résumé</h2>
            <p>
              {{detailProcedure.resume}}           
            </p>
            <h2>Description</h2>
            <p>
              {{detailProcedure.description}}           
            </p>
            <h2>Corps</h2>
            <div v-html="detailProcedure.corps">    
            </div>   
        </div>
          
        </v-list-item-content>
        <v-list-item v-else>
          {{messageDoc}}
        </v-list-item>

        <v-list-item-avatar
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-icon
              medium
              v-bind="attrs"
              v-on="on"
              @click="closeCard"
            >
              mdi-close
            </v-icon>
            </template>
            <span>Fermer</span>
          </v-tooltip>
        </v-list-item-avatar>
      </v-list-item>
    </v-card>

    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  import FormAddUsager from '@/components/usagers/FormAddUsager'
  import Notification from '@/components/Notification'
  export default {
    components: {
      Notification,
      FormAddUsager
    },
    computed: 
      mapGetters({
      detaildemande: 'demandes/detaildemande', 
      listusagers: 'usagers/selectlistusagers', 
      listprocedures: 'procedures/selectlistprocedures', 
      detailProcedure: 'procedures/detailprocedure', 
      listfournisseurs: 'fournisseurs/selectlistfournisseurs',
      liststructures: 'structures/selectliststructures',
    }),
    mounted: function() {
      this.$store.dispatch('usagers/getSelectList')
      this.$store.dispatch('procedures/getList')
      this.$store.dispatch('structures/getList')
      this.$store.dispatch('fournisseurs/getList')
      this.model.user_id = this.detaildemande.user_id,
      this.model.ess_retrait_id = this.detaildemande.ess_retrait_id,
      this.model.ess_traitement_id= this.detaildemande.ess_traitement_id,
      this.model.codeProcedure= this.detaildemande.codeProcedure,
      this.model.service_traitement_id= this.detaildemande.service_traitement_id
    },
    props: ['items'],
    
    data: () => ({
      dialog: false,
      loading: false,
      message:null,
      color:null,
      valid: true,
      model: {
        user_id: null,
        ess_retrait_id: null,        
        ess_traitement_id:null,
        codeProcedure:'',
        service_traitement_id:null,
        /* departementCommune: '',
        lieuRetrait: '',
        beneficiaire:'',
        etatPayement:'',
        typePayement:'', */
      },
       rules:{
        user_idRules: [
          v => !!v || 'Usager est obligatoire',
        ],
        ess_retrait_idRules: [
          v => !!v || 'ESS de retrait est obligatoire',
        ],
        ess_traitement_idRules: [
          v => !!v || 'ESS de traitement est obligatoire',
        ],
        codeProcedureRules: [
          v => !!v || 'Code procédure est obligatoire',
        ],
        service_traitement_idRules: [
          v => !!v || 'Service de traitement est obligatoire',
        ]
      },
      activeCard:false, 
      processing:false, 
      hasDocumentation:false, 
      messageDoc:'Chargement...', 
   
      selectedItem: 0,
      departementCommunes: ['Dakar','Thiès'],
      lieuRetraits: ['ESS-DAKAR','ESS-BAMBEY'],
      beneficiaires: ['Moi meme','Une autre personne'],
      etatPayements: ['Payé','Impayé'],
      typePayements: ['Wave','Orange money'],

    }),
    metaInfo () {
      return {
        items: this.items,
      }
    },
     watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    methods: {
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
      soumettre(){
        this.model.brouillon = '0'
        this.submitForm()
      },
      brouillon(){
        this.model.brouillon = '1'
        this.submitForm()
      },
      submitForm () {
        let validation = this.$refs.form.validate()  
        let data = {...this.model,user_id:this.model.user_id.id,codeProcedure:this.model.codeProcedure.code}
        console.log('Donées formulaire ++++++: ',data)

        /*   this.loading = true;
          validation && this.$essApi.post('/ess/dossiers',data)
          .then((res) => {           
            console.log('Donées reçus ++++++: ',res.data)
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Ajout réussi'})
            this.$router.push('/demandes');
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requette envoyé ')
        }); */
      },
      async changeProcedure(procedure) {
        this.messageDoc='Chargement...'
        this.processing= true;
        this.hasDocumentation= true;
        this.activeCard =true
          await this.$essApi.$get('/ess/demarche/'+procedure?.demarche_id).then((response) => { 
            this.$store.commit('procedures/initdetail', response.data)
            this.processing= false;
            this.hasDocumentation= true;
          }).catch((error) => {
              this.processing= false;
              this.hasDocumentation= false;
              this.messageDoc='Pas de documention'
              console.log('Code error ++++++: ', error.response.data.message)
              let message = error.response?.data?.message || 'Echec de la connection'
              console.log(message)
          }).finally(() => {
            this.processing= false;
            console.log('Requette envoyé ')
        });
        
      },
      closeCard() {
        this.activeCard =false
      }
    }
  }
</script>