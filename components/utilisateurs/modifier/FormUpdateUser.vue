<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data"
      >
      <!--<div >
        <div class="headline">
          <v-avatar v-if="imageData" size="100px">
            <img :src="imageData" alt="Avatar"/>
          </v-avatar>
          <v-avatar size="100px" v-else>
            <img src="@/static/avatar/default-user.png" alt="Cheikh Gueye"/>
          </v-avatar>
        </div>
      </div>
      <div>
        <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="$refs.file.click()"
            >
          <v-icon>mdi-upload-outline</v-icon>
        </v-btn>
        <input type="file" id="file" name="avatar" ref="file" v-on:change="handleFileUpload" style="display: none"/>
        <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue"
              @click="$refs.file.click()"
            >
          <v-icon>mdi-camera-outline</v-icon>
        </v-btn>
      </div>
      <span class="caption">Photo de profil png ou jpg max 2Mo</span>-->
      <v-row>
        <!-- <v-col md="12" lg="12" sm="12">
          <v-radio-group
            v-model="model.sexe"
            :rules="rules.sexeRules"
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
        </v-col>-->
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Prénom et Nom"
            outlined dense
            v-model="model.name"
            :rules="rules.firstnameRules"
          ></v-text-field>
        </v-col>
        <!--<v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Prénom"
            outlined dense
            v-model="model.firstname"
            :rules="rules.firstnameRules"
          ></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Nom"
            outlined dense
            v-model="model.lastname"
            :rules="rules.lastnameRules"
          ></v-text-field>
        </v-col>-->
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Adresse Email"
            outlined dense
            v-model="model.email"
            :rules="rules.emailRules"
          ></v-text-field>
        </v-col>
        <!-- <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Login"
            outlined dense
            v-model="model.username"
            :rules="rules.usernameRules"
          ></v-text-field>
        </v-col> -->
       <!-- <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Fonction"
            outlined dense
            v-model="model.fonction"
            :rules="rules.fonctionRules"
          ></v-text-field>
        </v-col>-->
        <!-- <v-col lg="6" sm="12" md="6">
          <v-menu
            v-model="menu1"
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
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col> -->
        <!-- <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Lieu de naissance"
            outlined dense
            v-model="model.place_of_birth"
            :rules="rules.place_of_birthRules"
          ></v-text-field>
        </v-col> -->
       <!--  <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Adresse"
            outlined dense
            v-model="model.adresse"
            :rules="rules.adresseRules"
          ></v-text-field>
        </v-col>-->
        <!-- <v-col md="6" lg="6" sm="12">
          <vue-tel-input-vuetify label="Téléphone"
            outlined dense
            v-model="model.telephone"
            :rules="rules.telephoneRules">
  
          </vue-tel-input-vuetify>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Indicatif"
            dense outlined
            v-model="model.country_code"
            :rules="rules.country_codeRules"
          ></v-text-field>
        </v-col> -->
        <!--<v-col md="2" lg="2" sm="12">
          <v-text-field
            label="Indicatif"
            dense outlined
            v-model="model.country_code"
            :rules="rules.country_codeRules"
          ></v-text-field>
        </v-col>-->
        <v-col md="6" lg="6" sm="12">
          <v-text-field
            label="Téléphone"
            outlined dense
            v-model="model.telephone"
            :rules="rules.telephoneRules"
          ></v-text-field>
        </v-col>
        <v-col
          lg="6"
          md="6"
          sm="12"
        >
          <v-autocomplete
              v-model="model.roles"
              :items="listroles.filter(item => (item && item.name != 'super_admin'))"
              :rules="rules.rolesRules"
              outlined
              dense
              multiple
              small-chips
              label="Rôle"
              item-text="description"
              item-value="id"
              clearable
              return-object
              @change="changeRole"
            >
          </v-autocomplete>
        </v-col>
        <v-col
        lg="6"
        md="6"
        sm="12"
        >
        <v-autocomplete
            v-model="model.structure_id"
            :rules="this.showFournisseur==true?rules.fournisseur_services_idRules:null"
            :items="liststructures"
            outlined
            dense
            label="Structure"
            item-text="nom_structure"
            item-value="id"
            return-object
            v-if="showFournisseur"
          >
        </v-autocomplete>
      </v-col>
      
      </v-row>
  
      <v-btn
        :loading="loading"
        :disabled="!valid"
        class="mr-4 text-white" color="#1B73E8"
        @click="submitForm"
      >
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
      mounted: function() {
        this.getDetail(this.$nuxt._route.params.id)
        this.$store.dispatch('structures/getSelectList')
      },
      computed: 
        mapGetters({
        detailutilisateur:'utilisateurs/detailutilisateur',
        listroles: 'roles/selectlistroles',
        liststructures: 'structures/selectliststructures'
        /* listfournisseurs: 'fournisseurs/selectlistfournisseurs',
        liststructures: 'structures/selectliststructures', */
      }),
      data: () => ({
        loading: false,
        message:null,
        color:null,
        valid: true,
        showFournisseur: false,
        message:null,
        model: {
          id:null,
          avatar:'',
          name: '',
          firstname: '',
          lastname: '',
          email: '',
          roles: null,
          fournisseur_services_id:null,
          country_code:'+221',
          telephone: '',
          adresse: '',
          fonction: '',
          structure_id:null
        },
        rules:{
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
        /* sexeRules: [
          v => !!v || 'Civilité est obligatoire',
        ], */
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
  
  
        imageData:null,
      }),
      methods: {
        getDetail(id){
          this.progress=true
          this.$msasApi.$get('/users/'+id)
        .then(async (response) => {
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('utilisateurs/getDetail',response.data)
            this.model.id = response.data.id
            /* this.imageData = this.detailutilisateur.avatar, */
            this.model.name= response.data.name
            /* this.model.firstname= this.detailutilisateur.firstname,
            this.model.lastname= this.detailutilisateur.lastname, */
            this.model.email= response.data.email
            this.model.roles= response.data.roles
            this.model.structure_id = response.data.structures[0]?.id
            await this.changeRole()
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
        handleFileUpload(e){         
          //Recupère le fichier
          const input = this.$refs.file
          const files = input.files
  
          //Recupère l'extension
          let idxDot = files[0].name.lastIndexOf(".") + 1;
          let extFile = files[0].name.substr(idxDot, files[0].name.length).toLowerCase(); 
          let size = files[0].size/1024/1024 //La taille en Mbit
          console.log('Size-------------- ',size)
  
          if (size <= 2 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png")){
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
          }else{
            alert("Seul les images jpg/jpeg png et de taille inférieur à 2Mb sont acceptés!");
          }  
        },
        submitForm () {
          let validation = this.$refs.form.validate()
          let selectedRoles = this.model.roles.map((item)=>{return item.id})
          this.model.roles=selectedRoles
          this.loading = true;
  
          /* let formData = new FormData();
          formData.append("avatar", this.model.avatar);
          formData.append("id", this.model.id);
          formData.append("firstname",this.model.firstname );
          formData.append("lastname",this.model.lastname);
          formData.append("email",this.model.email);
          formData.append("roles",JSON.stringify(this.model.roles));
          if(this.model.fournisseur_services_id != null){
            formData.append("fournisseur_services_id",this.model.fournisseur_services_id);
          }
          formData.append("country_code",this.model.country_code),
          formData.append("telephone",this.model.telephone),
          formData.append("adresse",this.model.adresse),
          formData.append("fonction",this.model.fonction),
          formData.append("structure_id",this.model.structure_id) */
  
          validation && this.$msasFileApi.put('/users/'+this.model.id,{...this.model,roles:selectedRoles,...this.model.avatar})
            .then((res) => {
              this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Modification réussi'})
              this.$router.push('/utilisateurs');
            })
            .catch((error) => {
                console.log('Code error ++++++: ', error)
                this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de la modification '})
            }).finally(() => {
              this.loading = false;
              console.log('Requette envoyé ')
          });
        },
        resetForm () {
          this.$refs.form.reset()
        },
        resetValidationForm () {
          this.$refs.form.resetValidation()
        },
        async changeRole() {

        let checkRole = this.model.roles.filter(item => (item && item.name === 'point_focal' || item && item.name === 'admin_structure' || item && item.name === 'DGES' || item && item.name === 'directeur_eps')).length;
        if(checkRole==1)
        this.showFournisseur=true
        else
        this.showFournisseur=false
        console.log('************',checkRole)
        },
        },
      metaInfo () {
        return {
          items: this.items,
        }
      }
    }
  </script>