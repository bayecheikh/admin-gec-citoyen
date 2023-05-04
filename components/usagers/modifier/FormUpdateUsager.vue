<template>
<div>
  <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data"
    >
    <div >
      <div class="headline">
        <v-avatar v-if="imageData" size="100px">
          <img :src="imageData" alt="Avatar"/>
        </v-avatar>
        <v-avatar tile size="100px" v-else>
          <img src="@/static/avatar/default-user.png" alt="Avatar"/>
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
    <span class="caption">Photo de profil png ou jpg max 2Mo</span>
    <v-row class="py-5">
      <v-col md="12" lg="12" sm="12">
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
      </v-col>
      <v-col md="6" lg="6" sm="12">
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
      </v-col>
      <!-- <v-col md="6" lg="6" sm="12">
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
      </v-col> -->
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
      <!-- <v-col md="6" lg="6" sm="12">
        <v-text-field
          label="Téléphone"
          outlined dense
          v-model="model.telephone"
          :rules="rules.telephoneRules"
        ></v-text-field>
      </v-col> -->
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
      </v-col>
      <!-- <v-col
        lg="6"
        md="6"
        sm="12"
      >
        <v-select
          v-model="value"
          :items="roles"
          
          label="Roles"
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
  <Notification :message="message" :color="color" v-if="message" class="my-5"/>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  import Notification from '@/components/Notification'
  export default {
    components: {
      Notification
    },
    mounted: function() {
      this.$store.dispatch('profils/getList')
    },
    computed: 
      mapGetters({
      detailusager:'usagers/detailusager',
      listprofils: 'profils/selectlistprofils',
    }),
    mounted: function() {
      this.model.id = this.detailusager.id,
      this.imageData = this.detailusager.avatar,
      this.model.sexe = this.detailusager.user_details?.sexe,
      this.model.firstname= this.detailusager.firstname,
      this.model.lastname= this.detailusager.lastname,
      this.model.email= this.detailusager.email,
      this.model.username= this.detailusager.username,
      this.model.type_profil_id= this.detailusager.type_profil_id,
      this.model.telephone= this.detailusager.telephone,
      this.model.address= this.detailusager.user_details?.address,

      this.model.nationality=this.detailusager.user_details?.nationality,
      this.model.date_of_birth=this.detailusager.user_details?.date_of_birth,
      
      this.model.place_of_birth= this.detailusager.user_details?.place_of_birth,
      this.model.type_identification=this.detailusager.user_details?.type_identification,
      this.model.numero_identification=this.detailusager.user_details?.numero_identification,
      this.model.fonction=this.detailusager.user_details?.fonction
      this.model.structure_id=JSON.parse(localStorage.getItem('auth.loggedInUser')).structure_id
      
    },
    data: () => ({
      loading: false,
      message:null,
      color:null,
      valid: true,
     typeProfils: [{
          text: "Citoyen",
          value: 1,
          selected: true,
        },
        {
          text: "Entreprise",
          value: 2,
        } 
      ],
      typePieces: [{
          text: "Cni",
          value: "cni",
          selected: true,
        },
        {
          text: "Passeport",
          value: "passeport",
        } 
      ],
      model: {
        avatar:'',
        sexe:'',
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        type_profil_id: '',
        telephone: '',
        address: '',
        nationality: '',
        date_of_birth: '',
        place_of_birth: '',
        type_identification: '',
        numero_identification: 0,
        fonction: '',
        structure_id:JSON.parse(localStorage.getItem('auth.loggedInUser')).structure_id
      },
      rules:{
        firstnameRules: [
          v => !!v || 'Prénom est obligatoire',
          v => /^[a-zA-Z0-9-_ ]+$/.test(v) || 'Prénom incorrecte',
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
          v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ || 'Téléphone incorrecte',
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
          v => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/|| 'Numéro d\'identification incorrecte',
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
      imageData:null,
    }),
    methods: {
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
        this.loading = true;
        /* console.log('Donées formulaire++++++: ',{...this.model,roles:selectedRoles,...this.model.avatar}) */
        let formData = new FormData();
        formData.append("avatar", this.model.avatar);
        formData.append("firstname", this.model.firstname );
        formData.append("sexe", this.model.sexe );
        formData.append("lastname", this.model.lastname);
        formData.append("email", this.model.email);
        formData.append("username", this.model.email);
        formData.append("type_profil_id", this.model.type_profil_id);
        formData.append("telephone", this.model.telephone);
        formData.append("address", this.model.address);
        formData.append("nationality", this.model.nationality);
        formData.append("date_of_birth", this.model.date_of_birth);
        formData.append("place_of_birth", this.model.place_of_birth);
        formData.append("type_identification", this.model.type_identification);
        formData.append("numero_identification", this.model.numero_identification);
        formData.append("fonction", this.model.fonction);
        formData.append("structure_id", this.model.structure_id);

        console.log('donnee envoyées++++++++++++++',this.model)

       validation && this.$essFileApi.put('/update-users/'+this.model.id,formData)
          .then((res) => {          
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message || 'Modification réussie'})
            this.$router.push('/usagers');
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de la modification'})
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
    },
    metaInfo () {
      return {
        items: this.items,
      }
    }
  }
</script>
