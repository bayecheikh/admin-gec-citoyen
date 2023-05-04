<template>
  <div>
    <v-form class="" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-card class="mx-auto mb-5 pl-10 pt-10 pr-10 pb-5">
        <v-row>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
              v-model="selectedAnnee"
              :items="listannees"
              :rules="rules.fournisseur_services_idRules"
              outlined
              dense
              label="Année"
              item-text="libelle"
              item-value="id"
              return-object
              @change="changeAnnee"
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
              v-model="SelectedMonnaie"
              :items="listmonnaies"
              :rules="rules.fournisseur_services_idRules"
              outlined
              dense
              label="Monnaie"
              item-text="libelle"
              item-value="id"
              return-object
              @change="changeMonnaie"
            >
            </v-autocomplete>
          </v-col>
          <!--<v-col lg="4" md="4" sm="12" v-if="natureStructure=='Donneur' || natureStructure=='Mixte'">
            <v-autocomplete
              v-model="SelectedRegions"
              :items="listregions"
              :rules="rules.fournisseur_services_idRules"
              outlined
              dense
              label="Région"
              item-text="nom_region"
              item-value="id"
              return-object
              @change="changeRegion"
            >
            </v-autocomplete>
          </v-col>-->
        </v-row>
      </v-card>
      <h2 class="mb-5 primary custom-title-h2">Dimension du financement</h2>
      <v-card class="mx-auto mb-5 pl-10 pt-5 pr-10 pb-5">
        <v-row>
          <v-col md="12" lg="12" sm="12">
            <v-radio-group
              :mandatory="true"
              :v-model="selectedDimension"
              :rules="rules.sexeRules"
              @change="changeDimension"
              row
            >
              <v-radio v-for="item in listdimensions" :key="item.id"
                :label="item.libelle_dimension"
                :value="item.id"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row v-if="showRegion">
          <v-col md="12" lg="12" sm="12">
            <v-expansion-panels
              v-for="(item,i) in listregions"
              :key="i"
              class="mb-2"
            >
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-checkbox
                    v-model="selectedRegions"
                    :label="item.nom_region"
                    :value="item.id"
                  ></v-checkbox>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="item in item.departements" :key="item.id">
                    <v-checkbox
                      v-model="selectedDepartements"
                      :label="item.nom_departement"
                      :value="item.id"
                    ></v-checkbox>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-card>
      <h2 class="mb-5 primary custom-title-h2">Mode de financement</h2>
      <v-card class="mx-auto mb-5 pl-10 pt-5 pr-10 pb-5">
        <v-row>
            <v-col md="6" lg="6" sm="12" v-for="(item,i) in modeFinanceInputs"
              :key="i" id="custom-input">
              <v-text-field
                v-model="selectedModeFinancements[i]"
                outlined
                label=""
                prepend-inner-icon="mdi-map-marker"
                append-icon="mdi-map-marker"
                dense
              >
                <template slot="prepend-inner">
                  <div>{{item.libelle}}</div>
                </template>
                <template slot="append">
                  <div>{{devise}}</div>
                </template>
              </v-text-field>
          </v-col>
        </v-row>
        <v-row v-for="(item,i) in modes"
              :key="item.id">
            <v-col md="5" lg="6" sm="12">
                <v-select
                  :items="autreModeFinanceInputs"
                  v-model="model.libAutreModeFinance[i]"
                  label="Précisez le mode de financement"
                  return-value="libelle"
                  outlined
                  dense
                ></v-select>
            </v-col>
            <v-col md="6" lg="6" sm="12" id="custom-input-2" class="d-flex align-items-center">
                <v-text-field
                v-model="model.montantAutreModeFinance[i]"
                outlined
                label="Le montant"
                append-icon="mdi-map-marker"
                dense
                >
                  <template slot="append">
                    <div>{{devise}}</div>
                  </template>
                </v-text-field>
                <v-icon @click="deleteFindMode(i)">mdi-close</v-icon>
            </v-col>
        </v-row>
        <v-btn
          color="success"
          class="white--text mb-5"
          @click="submitLigneMode"
          depressed
          v-if="modeFinanceInputs.length"
          >
            Autres<v-icon right dark> mdi-plus </v-icon>
        </v-btn>
      </v-card>
      <h2 class="mb-5 primary custom-title-h2">Piliers et axes d'intervention</h2>
      <v-card class="mx-auto mb-5 pl-10 pt-10 pr-10 pb-5">
        <div class="custom-ligne-bloc">
          <v-row>
              
            <!--<v-col lg="4" md="4" sm="12">
              <v-autocomplete
                v-model="selectedPiliers0"
                :items="listpiliers"
                :rules="rules.fournisseur_services_idRules"
                outlined
                dense
                label="structures"
                item-text="nom_pilier"
                item-value="id"
                return-object
                @change="(event) => changePilier(event)"
              >
              </v-autocomplete>
            </v-col>-->
            <v-col lg="6" md="6" sm="12" v-if="natureStructure=='Receveur' || natureStructure=='Mixte'">
              <v-autocomplete
                v-model="selectedStructureSources0"
                :items="liststructures.filter(structure => (structure.donneur_receveur_mixte=='Donneur' || structure.donneur_receveur_mixte=='Mixte' || structure.id==idStructure))"
                :rules="rules.textfieldRules"
                outlined
                dense
                label="Bailleurs"
                item-text="nom_structure"
                item-value="id"
                return-object
                @change="(event) => changeStructureSource(event)"
              >
              </v-autocomplete>
            </v-col>
            <v-col lg="6" md="6" sm="12" v-if="natureStructure=='Donneur' || natureStructure=='Mixte'">
              <v-autocomplete
                v-model="selectedStructureBeneficiaires0"
                :items="liststructures.filter(structure => (structure.donneur_receveur_mixte=='Receveur' || structure.donneur_receveur_mixte=='Mixte' ))"
                :rules="rules.textfieldRules"
                outlined
                dense
                label="Bénéficiaires"
                item-text="nom_structure"
                item-value="id"
                return-object
                @change="(event) => changeStructureBeneficiaire(event)"
              >
              </v-autocomplete>
            </v-col>
            <v-col lg="6" md="6" sm="12" v-if="natureStructure=='Donneur' || natureStructure=='Mixte'">
              <v-autocomplete
                v-model="selectedRegions0"
                :items="listregions"
                :rules="rules.textfieldRules"
                outlined
                dense
                label="Région"
                item-text="nom_region"
                item-value="id"
                return-object
                @change="(event) => changeRegion2(event)"
              >
              </v-autocomplete>
            </v-col>
            <v-col lg="6" md="6" sm="12">
              <v-autocomplete
                v-model="selectedPiliers0"
                :items="listpiliers"
                :rules="rules.textfieldRules"
                outlined
                dense
                label="Piliers"
                item-text="nom_pilier"
                item-value="id"
                return-object
                @change="(event) => changePilier(event)"
              >
              </v-autocomplete>
            </v-col>
            <v-col lg="6" md="6" sm="12" v-if="showAxes">
              <v-autocomplete
                v-model="selectedAxes0"
                :items="listAxes0"
                :rules="showAxes==true?rules.textfieldRules:null"
                outlined
                dense
                label="Axe"
                item-text="nom_axe"
                item-value="id"
                return-object
                @change="(event) => changeAxe(event)"
              >
              </v-autocomplete>
            </v-col>
            <v-col lg="12" md="12" sm="12">
              <v-row>
                <v-col md="3" lg="3" sm="12">
                    Bien et Services
                </v-col>
                <v-col md="9" lg="9" sm="12">
                  <v-row>
                    <v-col md="4" lg="4" sm="12">
                      <v-text-field
                        label="Montant prévu"
                        outlined
                        dense
                        v-model="montantBienServicePrevus0"
                        :rules="rules.textfieldRules"
                      ></v-text-field>
                    </v-col>
                    <v-col md="4" lg="4" sm="12">
                      <v-text-field
                        label="Montant Mobilisé"
                        outlined
                        dense
                        v-model="montantBienServiceMobilises0"
                        :rules="rules.numberRules"
                      ></v-text-field>
                    </v-col>
                    <v-col md="4" lg="4" sm="12">
                      <v-text-field
                        label="Montant Executé"
                        outlined
                        dense
                        v-model="montantBienServiceExecutes0"
                        :rules="rules.numberRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="3" lg="3" sm="12">
                    Investissements
                </v-col>
                <v-col md="9" lg="9" sm="12">
                  <v-row>
                    <v-col md="4" lg="4" sm="12">
                      <v-text-field
                        label="Montant prévu"
                        outlined
                        dense
                        v-model="montantInvestissementPrevus0"
                        :rules="rules.numberRules"
                      ></v-text-field>
                    </v-col>
                    <v-col md="4" lg="4" sm="12">
                      <v-text-field
                        label="Montant Mobilisé"
                        outlined
                        dense
                        v-model="montantInvestissementMobilises0"
                        :rules="rules.numberRules"
                      ></v-text-field>
                    </v-col>
                    <v-col md="4" lg="4" sm="12">
                      <v-text-field
                        label="Montant Executé"
                        outlined
                        dense
                        v-model="montantInvestissementExecutes0"
                        :rules="rules.numberRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-btn
                color="success"
                class="white--text"
                @click="submitLigne"
                depressed
              >
                Ajouter
                <v-icon right dark> mdi-plus </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>
          <v-simple-table class="custom-ligne-bloc-2">
              <thead>
                <tr>
                  <th class="text-left" >
                    Région
                  </th>
                  <th class="text-left" >
                    Bénéficiaire
                  </th>
                  <th class="text-left" >
                    Bailleur
                  </th>
                                   
                  <th class="text-left">
                    Pilier
                  </th>
                  <th class="text-left">
                    Axe
                  </th>
                  <th class="text-left">
                    Montant Biens et services prévu
                  </th>
                  <th class="text-left">
                    Montant Biens et services mobilisé
                  </th>
                  <th class="text-left">
                    Montant Biens et services executé
                  </th>
                  <th class="text-left">
                    Montant Investissement prévu
                  </th>
                  <th class="text-left">
                    Montant Investissement mobilisé
                  </th>
                  <th class="text-left">
                    Montant Investissement executé
                  </th>
                  <th class="text-left">
                    -
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item,i) in LigneFinancementInputs"
                  :key="item.id"
                >
                <td >{{item.region && item.region.nom_region}}</td>
                  <td >{{item.structurebeneficiaire && item.structurebeneficiaire.nom_structure}}</td>
                  <td >{{item.structuresource && item.structuresource.nom_structure}}</td>  
                  <td>{{item.pilier && item.pilier.nom_pilier}}</td>
                  <td>{{item.axe && item.axe.nom_axe}}</td>
                  <td>{{item.montantBienServicePrevus}}</td>
                  <td>{{item.montantBienServiceMobilises}}</td>
                  <td>{{item.montantBienServiceExecutes}}</td>
                  <td>{{item.montantInvestissementPrevus}}</td>
                  <td>{{item.montantInvestissementMobilises}}</td>
                  <td>{{item.montantInvestissementExecutes}}</td>
                  <td><v-icon @click="deleteFind(i)">mdi-close</v-icon></td>
                  
                </tr>
              </tbody>
          </v-simple-table>       
      </v-card>
      <h2 class="mb-5">Fichiers</h2>
      <v-card class="mx-auto mb-5 pl-10 pt-5 pr-10 pb-5">
        <v-row v-for="(item,i) in fichiers"
              :key="item.id">
          <v-col md="6" lg="6" sm="12">
              <v-text-field
                v-model="item.libelle_fichier"
                outlined
                label="Nom du fichier" 
                dense             
              >              
              </v-text-field>
          </v-col>
          <v-col md="6" lg="6" sm="12" class="d-flex">
              <v-file-input
              v-model="item.input_fichier"
              outlined
              label="Joindre le fichier"
              dense
              :clearable="false"
              >
              </v-file-input>
              <v-icon @click="deleteFindFichier(i)">mdi-close</v-icon>
          </v-col>

        </v-row>
        <v-btn
          color="success"
          class="white--text mb-5"
          @click="submitLigneFichier"
          depressed
        >
          Ajouter un fichier
          <v-icon right dark> mdi-plus </v-icon>
        </v-btn>
      </v-card>
      <v-btn class="mr-4 text-white" color="#1B73E8" @click="submitForm">
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
      this.getDetail(this.$getUser()?.id)

      this.listPiliers=this.listiliers
      this.listStructures=this.liststructures
      this.listDimensions=this.listdimensions
    },
    computed: {
      ...mapGetters({
      detailUtilisateur: 'utilisateurs/detailutilisateur',
      listannees: 'annees/listannees',
      listmonnaies: 'monnaies/listmonnaies',
      listdimensions: 'dimensions/listdimensions',
      listregions: 'regions/listregions',
      liststructures: 'structures/selectliststructures',
      listmodefinancements: 'modefinancements/listmodefinancements',
      listpiliers: 'piliers/listpiliers',
      listaxes: 'axes/listaxes',
      
      
    })},
    data: () => ({
      loggedInUser:'',
      natureStructure:'',
      idStructure:'',
      inputfichiers:[],
      libelle_fichiers:[],
      fichiers:[],
      modes:[],
      counterrow:1,
      counterrow_fichier:1,
      counterrow_mode:1,
      filename : '',
      loading: false,
      message:null,
      color:null,
      valid: true,
      showFournisseur: false,
      showAutreMode: false,
      showNumAutorisation: false,
      showAccordSiege: false,
      showNumAgrement: false,
      showAdresseStructure: false,
      showRegion: false,
      showAxes:false,
      message:null,
      autreMode:false,
      devise:'',
      listPiliers:[],
      listStructures:[],
      listAxes:[],
      listDimensions:[],
      listStructures:[],
      modeFinanceInputs:[],
      autreModeFinanceInputs:[],
      LigneModeFinancement:[],
      LigneFinancementInputs:[],
      selectedStructureSources0:[],
      selectedStructureBeneficiaires0:[],
      selectedRegions0:[],
      selectedPiliers0:[],
      selectedAxes0:[],
      montantBienServicePrevus0:'',
      montantBienServiceMobilises0:'',
      montantBienServiceExecutes0:'',
      montantInvestissementPrevus0:'',
      montantInvestissementMobilises0:'',
      montantInvestissementExecutes0:'',

      selectedstructuresources:[],
      selectedstructurebeneficiaires:[],
      selectedregions:[],
      selectedPiliers:[],
      selectedAxes:[],
      montantBienServicePrevus:[],
      montantBienServiceMobilises:[],
      montantBienServiceExecutes:[],
      montantInvestissementPrevus:[],
      montantInvestissementMobilises:[],
      montantInvestissementExecutes:[],

      selectedAnnee: [],
      selectedMonnaie: [],
      selectedDimension: [],
      selectedRegions: [],
      selectedModeFinancements: [],
      selectedStructure: [],
      model: {
        libAutreModeFinance:[],
        montantAutreModeFinance:[]
      },
      rules:{
        nom_structureRules: [
          v => !!v || 'Dénomination est obligatoire'
        ],
        nameRules: [
          v => !!v || 'Champ obligatoire'
        ],
        firstnameRules: [
          v => !!v || 'Champ obligatoire'
        ],
        lastnameRules: [
          v => !!v || 'Champ obligatoire'
        ],
        emailRules: [
          v => !!v || 'l\'E-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail mdoit etre valide',
        ],
        numberRules: [
        v  => {
          if (!v.trim() || v=='') return true;
          if (!isNaN(parseFloat(v)) && v >= 0 ) return true;
          return 'Veuillez saisir un chiffre valide';
        },
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
        textfieldRules: [],
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
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      imageData:null,
    }),
    methods: {
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/users/'+id)
        .then(async (response) => {
            console.log('Detail user++++++++++',response.data)
            this.$store.dispatch('utilisateurs/getDetail',response.data)
            this.idStructure = response.data?.structures[0]?.id
            this.natureStructure = response.data?.structures[0]?.donneur_receveur_mixte
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
        let idxDot = files[0]?.name.lastIndexOf(".") + 1;
        let extFile = files[0]?.name.substr(idxDot, files[0].name.length).toLowerCase();
        let size = files[0]?.size/1024/1024 //La taille en Mbit
        console.log('Size-------------- ',size)
        if(files.length!=0){
          if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="pdf" || extFile=="doc" || extFile=="docx")){
            this.model.accord_siege = files[0];
            this.filename = files[0].name
          }else{
            alert("Seul les fichiers jpg/jpeg/png/pdf/doc/docx et de taille inférieur à 5Mb sont acceptés!");
          }
        }
      },
      submitForm () {
        this.loading = true

        let validation = this.$refs.form.validate()

        let annee = this.selectedAnnee?.id
        let monnaie = this.selectedMonnaie?.id
        let region = this.selectedRegion?.id
        let dimension = this.selectedDimension

        let montantModeFinancements = this.selectedModeFinancements
        let libelleModeFinancements = this.modeFinanceInputs?.map((item)=>{return item.libelle})
        let libAutreModeFinance = this.model.libAutreModeFinance
        let montantAutreModeFinance = this.model.montantAutreModeFinance
        let autreMode = this.modes

        let structuresources = this.selectedstructuresources?.map((item)=>{return item.id})
        let structurebeneficiaires = this.selectedstructurebeneficiaires?.map((item)=>{return item.id})
        let regions = this.selectedregions?.map((item)=>{return item.id})
        let piliers = this.selectedPiliers?.map((item)=>{return item.id})
        let axes = this.selectedAxes?.map((item)=>{return item.id})
        console.log('++++++++piliers ',piliers)
        console.log('++++++++axes ',axes)
        let montantBienServicePrevus = this.montantBienServicePrevus
        let montantBienServiceMobilises = this.montantBienServiceMobilises
        let montantBienServiceExecutes = this.montantBienServiceExecutes
        let montantInvestissementPrevus = this.montantInvestissementPrevus
        let montantInvestissementMobilises = this.montantInvestissementMobilises
        let montantInvestissementExecutes = this.montantInvestissementExecutes

        for(let i=0;i<=libelleModeFinancements.length;i++){
          this.LigneModeFinancement.push({libelle:libelleModeFinancements[i],montant:montantModeFinancements[i]})
        }
        if(autreMode.length){
          for(let i=0;i<=autreMode.length;i++){
            if(libAutreModeFinance[i] && montantAutreModeFinance[i]){
              libelleModeFinancements.push(libAutreModeFinance[i])
              montantModeFinancements.push(montantAutreModeFinance[i])
            }
          }
        }
        let ligneModeFinancements = JSON.stringify(this.LigneModeFinancement)
        let ligneFinancements = this.LigneFinancementInputs
        let fichiers = this.fichiers
        console.log('libelle mode+++++++++++++',libelleModeFinancements)
        let formData = new FormData();
        
        formData.append("libelleModeFinancements",libelleModeFinancements);
        formData.append("montantModeFinancements",montantModeFinancements);
        
        /* if(autreMode){
          formData.append("libAutreModeFinance",libAutreModeFinance);
          formData.append("montantAutreModeFinance",montantAutreModeFinance);
        } */

        formData.append("structure_sources",structuresources);
        formData.append("structure_beneficiaires",structurebeneficiaires);
        formData.append("regions",regions);
        formData.append("piliers",piliers);
        formData.append("axes",axes);
        formData.append("montantBienServicePrevus",montantBienServicePrevus);
        formData.append("montantBienServiceMobilises",montantBienServiceMobilises);
        formData.append("montantBienServiceExecutes",montantBienServiceExecutes);
        formData.append("montantInvestissementPrevus",montantInvestissementPrevus);
        formData.append("montantInvestissementMobilises",montantInvestissementMobilises);
        formData.append("montantInvestissementExecutes",montantInvestissementExecutes);

        formData.append("annee",annee);
        formData.append("monnaie",monnaie);
        formData.append("dimension",dimension);
        formData.append("region",region);
        formData.append("ligneModeFinancements",ligneModeFinancements);
        formData.append("ligneFinancements",ligneFinancements);

        var files = fichiers;
        var totalfiles = files.length;
        for (var index = 0; index < totalfiles; index++) {
          formData.append("libelle_fichiers[]",files[index].libelle_fichier);
        }
        for (var index = 0; index < totalfiles; index++) {
          formData.append("input_fichiers[]",files[index].input_fichier);
        }
        
       
        let data = {
          annee : annee,
          monnaie : monnaie,
          dimension : dimension,
          region : region,
          ligneFinancements: ligneFinancements,
          ligneModeFinancements:ligneModeFinancements,
          fichiers:fichiers,
          
        }

        console.log('Donées formulaire source financements ++++++: ',data)

        console.log('FormData ++++++ : ',formData)



       validation && this.$msasFileApi.post('/investissements',formData)
          .then((res) => {
            console.log('Donées reçus ++++++: ',res)
            this.$store.dispatch('toast/getMessage',{type:'success',text:res.data.message})
            this.$router.push('/investissements');
          })
          .catch((error) => {
              console.log('Code error ++++++: ', error)
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de l\'ajout '})
          }).finally(() => {
            this.loading = false;
            console.log('Requette envoyé ')
        });
      },
      submitLigne () {
        if(this.montantBienServiceExecutes0>this.montantBienServiceMobilises0 || this.montantInvestissementExecutes0>this.montantInvestissementMobilises0)
        {
          alert('Le montant exécuté doit etre inférieur ou égal au montant mobilisé')
        }
        else{
          this.counterrow += 1;

          if(this.natureStructure=='Donneur'){
            this.selectedStructureSources0 = this.detailUtilisateur?.structures[0]
            this.selectedstructuresources.push(this.detailUtilisateur?.structures[0])
          }
                
          if(this.natureStructure=='Receveur'){
            console.log('Detail Struct +++ ',this.findStructureName(this.detailUtilisateur?.structures[0]?.id))
            this.selectedStructureBeneficiaires0 = this.findStructureName(this.detailUtilisateur?.structures[0]?.id)
            this.selectedstructurebeneficiaires.push(this.findStructureName(this.detailUtilisateur?.structures[0]?.id))
            this.selectedRegions0 = this.findStructureName(this.detailUtilisateur?.structures[0]?.id)?.regions[0]
            this.selectedregions.push(this.findStructureName(this.detailUtilisateur?.structures[0]?.id)?.regions[0])
          }
          
          if(this.natureStructure=='Mixte' || this.natureStructure=='Receveur'){
            this.selectedstructuresources.push(this.selectedStructureSources0)
          }
          
          if(this.natureStructure=='Mixte' || this.natureStructure=='Donneur'){
            this.selectedstructurebeneficiaires.push(this.selectedStructureBeneficiaires0)
            this.selectedregions.push(this.selectedRegions0)
          }
          

          this.selectedPiliers.push(this.selectedPiliers0)
          this.selectedAxes.push(this.selectedAxes0)
          this.montantBienServicePrevus.push(this.montantBienServicePrevus0)
          this.montantBienServiceMobilises.push(this.montantBienServiceMobilises0)
          this.montantBienServiceExecutes.push(this.montantBienServiceExecutes0)
          this.montantInvestissementPrevus.push(this.montantInvestissementPrevus0)
          this.montantInvestissementMobilises.push(this.montantInvestissementMobilises0)
          this.montantInvestissementExecutes.push(this.montantInvestissementExecutes0)

          this.LigneFinancementInputs.push({
            id:this.counterrow,
            structuresource:this.selectedStructureSources0,
            structurebeneficiaire:this.selectedStructureBeneficiaires0,
            region:this.selectedRegions0,
            pilier:this.selectedPiliers0,
            axe:this.selectedAxes0,
            montantBienServicePrevus:this.montantBienServicePrevus0,
            montantBienServiceMobilises:this.montantBienServiceMobilises0,
            montantBienServiceExecutes:this.montantBienServiceExecutes0,
            montantInvestissementPrevus:this.montantInvestissementPrevus0,
            montantInvestissementMobilises:this.montantInvestissementMobilises0,
            montantInvestissementExecutes:this.montantInvestissementExecutes0
          })
          this.resetLigneFinancement()
          console.log('Donées LigneFinancementInputs ++++++: ',this.LigneFinancementInputs)
        }
        
      },
      resetLigneFinancement () {
        this.selectedStructureSources0 = ''
        this.selectedStructureBeneficiaires0 = ''
        this.selectedRegions0 = ''
        this.selectedPiliers0 = ''
        this.selectedAxes0 = ''
        this.montantBienServicePrevus0 = ''
        this.montantBienServiceMobilises0 = ''
        this.montantBienServiceExecutes0 = ''
        this.montantInvestissementPrevus0 = ''
        this.montantInvestissementMobilises0 = ''
        this.montantInvestissementExecutes0 = ''
      },
      deleteFind: function(index) {
        console.log('Index---- ',index);
        console.log('LigneFinancementInputs---- ',this.LigneFinancementInputs);
        this.LigneFinancementInputs.splice(index,1);
        this.selectedstructuresources.splice(index,1);
        this.selectedregions.splice(index,1);
        this.selectedPiliers.splice(index,1);
        this.selectedAxes.splice(index,1);
        this.montantBienServicePrevus.splice(index,1);
        this.montantBienServiceExecutes.splice(index,1);
        this.montantInvestissementPrevus.splice(index,1);
        this.montantInvestissementMobilises.splice(index,1);
        this.montantInvestissementExecutes.splice(index,1);
      },
      deleteFindFichier: function(index) {
        console.log('Index---- ',index);
        console.log('LigneFinancementInputs---- ',this.fichiers);
        this.fichiers.splice(index,1);
        this.libelle_fichiers.splice(index,1);
        this.inputfichiers.splice(index,1);

      },
      deleteFindMode: function(index) {
        console.log('Index---- ',index);
        console.log('LigneFinancementInputs---- ',this.modes);
        this.modes.splice(index,1);
        this.model.libAutreModeFinance.splice(index,1);
        this.model.montantAutreModeFinance.splice(index,1);

      },
      submitLigneFichier () {
        this.counterrow_fichier += 1;
        this.fichiers.push({id:this.counterrow_fichier,libelle_fichier:this.libelle_fichiers[this.counterrow_fichier],input_fichier:this.inputfichiers[this.counterrow_fichier]})
        console.log('Donées fichier row ++++++: ',this.fichiers)
      },
      submitLigneMode () {
        this.counterrow_mode += 1;
        this.modes.push({id:this.counterrow_mode,libelle_mode:this.model.libAutreModeFinance[this.counterrow_mode],input_mode:this.model.montantAutreModeFinance[this.counterrow_mode]})
        console.log('Donées fichier row ++++++: ',this.model.libAutreModeFinance)
        console.log('Donées fichier row ++++++: ',this.model.montantAutreModeFinance)
      },
      resetForm () {
        this.$refs.form.reset()
      },
      resetValidationForm () {
        this.$refs.form.resetValidation()
      },
      async changeRole(role) {

        let checkRole = this.model.roles.filter(item => item.name === 'agent_structure').length;
        if(checkRole==1)
        this.showFournisseur=true
        else
        this.showFournisseur=false
        console.log('************',checkRole)
      },
      async changeAutreMode(value) {
        this.showAutreMode=value?true:false
      },
      async changeAnnee(annee) {
        //this.showAutreMode=true
        this.selectedAnnee = annee
        //this.selectedType_sources = source.type_sources
        console.log('************',annee)
      },
      async changeRegion(region) {
        //this.showAutreMode=true
        this.selectedRegion = region
        //this.selectedType_sources = source.type_sources
        console.log('************',region)
      },
      async changeMonnaie(monnaie) {
        //this.showAutreMode=true
        this.selectedMonnaie = monnaie
        this.devise = monnaie.libelle
        //this.selectedType_sources = source.type_sources
        console.log('************',monnaie)
      },
      async changeDimension(e) {
        console.log('************ dimension',e)
        this.selectedDimension = e
        let modeFinanceInputs = this.listdimensions.filter(item => item.id === e)
        let predefModeFinanceInputs = modeFinanceInputs.length?modeFinanceInputs[0].ligne_modes:[]

        this.modeFinanceInputs = predefModeFinanceInputs.length?predefModeFinanceInputs.filter(item => item.predefini === '1'):[]
        this.autreModeFinanceInputs = predefModeFinanceInputs.length?predefModeFinanceInputs.filter(item => item.predefini === '0').map((item)=>{return item.libelle}):[]

        console.log('************ mode de financement',this.modeFinanceInputs)
        /*this.selectedDimension = e */
        
      },
      async changeStructureSource(value) {
        this.selectedStructureSources0= value        
        console.log('************',value)
        //console.log('************',i)
      },
      async changeStructureBeneficiaire(value) {
        this.selectedStructureBeneficiaires0= value        
        console.log('************',value)
        //console.log('************',i)
      },
      async changeRegion2(value) {
        this.selectedRegions0= value        
        console.log('************',value)
        //console.log('************',i)
      },
      async changePilier(value) {
        this.showAxes=true
        this.selectedPiliers0= value
        this.listAxes0 = value.axes         
        console.log('************',value)
        //console.log('************',i)
      },
      async changeAxe(value) {
        this.selectedAxes0 = value         
        console.log('************',value)

      },
      findStructureName (id) {
        return this.liststructures.filter(item => item.id === parseInt(id))[0]
      },
    },
    metaInfo () {
      return {
        items: this.items,
      }
    }
  }
</script>
<style>
#custom-input .v-text-field__slot{
  border-right: solid 1px #e3ebf3;
  margin-right: 7px;
  border-left: solid 1px #e3ebf3;
  padding-left: 25px;
  margin-left: 7px;
}
#custom-input-2 .v-text-field__slot{
  border-right: solid 1px #e3ebf3;
  margin-right: 7px;

  padding-left: 25px;
  margin-left: 7px;
}
.custom-ligne-bloc {
  border: solid 2px #e3ebf3;
  margin: 12px;
  padding: 34px;
  border-radius: 5px;
  margin-bottom: 26px;
  margin-top: 0px;
}
.custom-ligne-bloc-2 {
  border: solid 2px #e3ebf3;
  margin: 12px;
  padding: 0px;
  border-radius: 5px;
  margin-bottom: 26px;
  margin-top: 0px;
}
</style>
