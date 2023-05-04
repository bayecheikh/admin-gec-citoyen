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
              v-model="selectedMonnaie"
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
              :value="selectedDimension"
              :v-model="selectedDimension"         
              :rules="rules.sexeRules"
              @change="changeDimension"
              row
            >
              <v-radio
                v-for="item in listdimensions"
                :key="item.id"
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
      <h2 class="mb-5 primary custom-title-h2" v-if="modeFinanceInputs.length">Mode de financement</h2>
      <v-card class="mx-auto mb-5 pl-10 pt-5 pr-10 pb-5" v-if="modeFinanceInputs.length">
        <v-row  v-for="(item,i) in modes2"
              :key="i" >
            <v-col md="11" lg="11" sm="12" id="custom-input">
              <v-text-field
                v-model="selectedModeFinancements[i]"
                outlined
                label=""
                prepend-inner-icon="mdi-map-marker"
                append-icon="mdi-map-marker"
                dense
              >
                <template slot="prepend-inner">
                  <div>{{selectedModeFinancementsLibelle[i]}}</div>
                </template>
                <template slot="append">
                  <div>{{devise}}</div>
                </template>
              </v-text-field>
            </v-col>
            <v-icon @click="deleteFindMode2(i)">mdi-close</v-icon>
        </v-row>
        <v-row v-for="(item,i) in modes"
              :key="i">
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
            <v-col lg="6" md="6" sm="12" v-if="natureStructure=='Receveur' || natureStructure=='Mixte'">
              <v-autocomplete
                v-model="selectedStructureSources0"
                :items="liststructures.filter(structure => (structure.donneur_receveur_mixte=='Donneur' || structure.donneur_receveur_mixte=='Mixte' || structure.id==idStructure))"
                :rules="rules.textfieldRules"
                outlined
                dense
                label="Bailleur"
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
                label="Bénéficiaire"
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
                        :rules="rules.numberRules"
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
        <template v-if="detailinvestissement && detailinvestissement.ligne_financements && detailinvestissement.ligne_financements.length">
          <v-simple-table class="custom-ligne-bloc-2">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
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
                  <td>{{item.region?item.region.nom_region:findRegionName(item.id_region) && findRegionName(item.id_region).nom_region }}</td>
                  <td >{{item.structure_beneficiaire?item.structure_beneficiaire.nom_structure:findStructureName(item.id_structure_beneficiaire) && findStructureName(item.id_structure_beneficiaire).nom_structure }}</td>
                  <td >{{item.structure_source?item.structure_source.nom_structure:findStructureName(item.id_structure_source) && findStructureName(item.id_structure_source).nom_structure }}</td>           
                  <td>{{item.pilier?item.pilier.nom_pilier:findPilierName(item.id_pilier) && findPilierName(item.id_pilier).nom_pilier }}</td>
                  <td>{{item.pilier?item.axe.nom_axe:findAxeName(item.id_pilier,item.id_axe) && findAxeName(item.id_pilier,item.id_axe).nom_axe}}</td>
                  <td>{{item.montantBienServicePrevus}}</td>
                  <td>{{item.montantBienServiceMobilises}}</td>
                  <td>{{item.montantBienServiceExecutes}}</td>
                  <td>{{item.montantInvestissementPrevus}}</td>
                  <td>{{item.montantInvestissementMobilises}}</td>
                  <td>{{item.montantInvestissementExecutes}}</td>
                  <td><v-icon @click="deleteFind(i)">mdi-close</v-icon></td>
                  
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
        
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
      <v-btn class="mr-4 text-white" color="#1B73E8" @click="submitForm" depressed>
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
    mounted: async function() {
      this.getUserDetail(this.$getUser()?.id)
      await this.getDetail(this.$nuxt._route.params.id)
      this.listPiliers=this.listpiliers
      this.listDimensions=this.listdimensions
    },
    computed: {
      ...mapGetters({
      detailUtilisateur: 'utilisateurs/detailutilisateur',
      detailinvestissement:'investissements/detailinvestissement',
      listannees: 'annees/listannees',
      listmonnaies: 'monnaies/listmonnaies',
      listdimensions: 'dimensions/listdimensions',
      listregions: 'regions/listregions',
      listmodefinancements: 'modefinancements/listmodefinancements',
      listpiliers: 'piliers/listpiliers',
      listbailleurs: 'bailleurs/listbailleurs',
      liststructures: 'structures/selectliststructures',
      
    })},
    data: () => ({
      loggedInUser:'',
      idStructure:'',
      natureStructure:'',
      inputfichiers:[],
      libelle_fichiers:[],
      fichiers:[],
      modes:[],
      modes2:[],
      counterrow:1,
      counterrow_fichier:1,
      counterrow_mode:1,
      counterrow_mode2:1,
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
      listAxes:[],
      listDimensions:[],
      modeFinanceInputs:[],
      autreModeFinanceInputs:[],
      LigneModeFinancement:[],
      LigneFinancementInputs:[],
      selectedPiliers0:[],
      selectedBailleurs0:[],
      selectedStructureSources0:[],
      selectedStructureBeneficiaires0:[],
      selectedRegions0:[],
      selectedAxes0:[],
      montantBienServicePrevus0:'',
      montantBienServiceMobilises0:'',
      montantBienServiceExecutes0:'',
      montantInvestissementPrevus0:'',
      montantInvestissementMobilises0:'',
      montantInvestissementExecutes0:'',

      selectedPiliers:[],
      selectedBailleurs:[],
      selectedstructuresources:[],
      selectedstructurebeneficiaires:[],
      selectedregions:[],
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
      selectedModeFinancementsLibelle: [],

      model: {
        id : '',
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
        numberRules: [
        v  => {
          if (!v.trim() || v=='') return true;
          if (!isNaN(parseFloat(v)) && v >= 0 ) return true;
          return 'Veuillez saisir un chiffre valide';
        },
        ],
        lastnameRules: [
          v => !!v || 'Champ obligatoire'
        ],
        emailRules: [
          v => !!v || 'l\'E-mail est obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail mdoit etre valide',
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
      getUserDetail(id){
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
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/investissements/'+id)
        .then(async (response) => {
          this.LigneFinancementInputs = JSON.parse(JSON.stringify(response.data.ligne_financements))
            console.log('Detail investissement ++++++++++',response.data)
            this.$store.dispatch('investissements/getDetail',response.data)
            this.model.id= response.data.id
            this.selectedAnnee = response.data.annee[0]?response.data.annee[0]:''
            this.selectedMonnaie = response.data.monnaie[0]?response.data.monnaie[0]:''
            this.changeMonnaie(response.data.monnaie[0]?response.data.monnaie[0]:'')
            this.selectedDimension = response.data.dimension[0]?response.data.dimension[0].id:''
            this.changeDimension(response.data.dimension[0]?response.data.dimension[0].id:'')
            this.selectedRegions = response.data.region[0]?response.data.region[0]:''
            
            this.modeFinanceInputs = response.data?.mode_financements
            for(let i=0;i<=response.data.mode_financements.length;i++){
              this.counterrow_mode2 += 1;
              this.selectedModeFinancements.push(response.data.mode_financements[i].montant)
              this.selectedModeFinancementsLibelle.push(response.data.mode_financements[i].libelle)
              this.modes2.push({id:this.counterrow_mode2})
            }
          
            /* this.model.nom_structure= response.data.nom_structure
            this.selectedSource_financements= response.data.source_financements[0]
            this.changeSource_financement(response.data.source_financements[0])
            this.selectedType_sources = response.data.type_sources[0]
            this.model.numero_agrement = response.data.numero_agrement
            this.model.numero_autorisation = response.data.numero_autorisation
            this.model.debut_intervention = response.data.debut_intervention
            this.model.fin_intervention = response.data.fin_intervention
            this.model.adresse_structure = response.data.adresse_structure
            this.model.telephone_structure= response.data.telephone_structure
            this.model.email_structure= response.data.email_structure

            this.model.type_zone_value = response.data.type_zone_interventions[0]
            this.changeType_zone_intervention(response.data.type_zone_interventions[0])
            this.selectedRegions= response.data.regions.map((item)=>{return item.id})
            this.selectedDepartements= response.data.departements.map((item)=>{return item.id})
            this.selectedDimensions= response.data.dimensions.map((item)=>{return item.id}) */

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
        let region = this.selectedRegions?.id
        console.log('++++++++ region ',this.selectedRegion)
        let dimension = this.selectedDimension

        let montantModeFinancements = this.selectedModeFinancements
        let libelleModeFinancements = this.selectedModeFinancementsLibelle
        let libAutreModeFinance = this.model.libAutreModeFinance
        let montantAutreModeFinance = this.model.montantAutreModeFinance
        let autreMode = this.modes

        let bailleurs = []
        let structure_sources = []
        let structure_beneficiaires = []
        let regions = []
        let piliers = []
        let axes = []
        let montantBienServicePrevus = []
        let montantBienServiceMobilises = []
        let montantBienServiceExecutes = []
        let montantInvestissementPrevus = []
        let montantInvestissementMobilises = []
        let montantInvestissementExecutes =[]

        if(autreMode.length){
          
          for(let i=0;i<=autreMode.length;i++){
            if(libAutreModeFinance[i] && montantAutreModeFinance[i]){
              console.log('+++++++ autre mode ',libAutreModeFinance[i])
              console.log('+++++++ autre mode ',montantAutreModeFinance[i])
              libelleModeFinancements.push(libAutreModeFinance[i])
              montantModeFinancements.push(montantAutreModeFinance[i])
            }
          }
        }

        for(let i=0;i<=libelleModeFinancements.length;i++){
          if(libelleModeFinancements[i])
          this.LigneModeFinancement.push({libelle:libelleModeFinancements[i],montant:montantModeFinancements[i]})
        }
        
        let ligneModeFinancements = JSON.stringify(this.LigneModeFinancement)
        let ligneFinancements = []
        let fichiers = this.fichiers

        for(let i=0;i<=this.LigneFinancementInputs.length;i++){
          if(this.LigneFinancementInputs[i]?.id_pilier && this.LigneFinancementInputs[i]?.id_axe){
            this.counterrow++
            let ligneObj = {
            id:this.counterrow,
            structure_source:this.findStructureName(this.LigneFinancementInputs[i]?.id_structure_source),
            structure_beneficiaire:this.findStructureName(this.LigneFinancementInputs[i]?.id_structure_beneficiaire),
            region:this.findRegionName(this.LigneFinancementInputs[i]?.id_region),
            pilier:this.findPilierName(this.LigneFinancementInputs[i].id_pilier),
            axe:this.findAxeName(this.LigneFinancementInputs[i].id_pilier,this.LigneFinancementInputs[i].id_axe),
            montantBienServicePrevus:this.LigneFinancementInputs[i].montantBienServicePrevus,
            montantBienServiceMobilises:this.LigneFinancementInputs[i].montantBienServiceMobilises,
            montantBienServiceExecutes:this.LigneFinancementInputs[i].montantBienServiceExecutes,
            montantInvestissementPrevus:this.LigneFinancementInputs[i].montantInvestissementPrevus,
            montantInvestissementMobilises:this.LigneFinancementInputs[i].montantInvestissementMobilises,
            montantInvestissementExecutes:this.LigneFinancementInputs[i].montantInvestissementExecutes
            }
            ligneFinancements.push(ligneObj)
          }

          if(this.LigneFinancementInputs[i]?.pilier && this.LigneFinancementInputs[i]?.axe){
            this.counterrow++
            let ligneObj = {
            id:this.counterrow,
            structure_source:this.LigneFinancementInputs[i].structure_source,
            structure_beneficiaire:this.LigneFinancementInputs[i].structure_beneficiaire,
            region:this.LigneFinancementInputs[i].region,
            pilier:this.LigneFinancementInputs[i].pilier,
            axe:this.LigneFinancementInputs[i].axe,
            montantBienServicePrevus:this.LigneFinancementInputs[i].montantBienServicePrevus,
            montantBienServiceMobilises:this.LigneFinancementInputs[i].montantBienServiceMobilises,
            montantBienServiceExecutes:this.LigneFinancementInputs[i].montantBienServiceExecutes,
            montantInvestissementPrevus:this.LigneFinancementInputs[i].montantInvestissementPrevus,
            montantInvestissementMobilises:this.LigneFinancementInputs[i].montantInvestissementMobilises,
            montantInvestissementExecutes:this.LigneFinancementInputs[i].montantInvestissementExecutes
            }
            ligneFinancements.push(ligneObj)
          }
          
          
        }
        for(let i=0;i<ligneFinancements.length;i++){
          structure_sources.push(ligneFinancements[i].structure_source)
          structure_beneficiaires.push(ligneFinancements[i].structure_beneficiaire)
          regions.push(ligneFinancements[i].region)
          piliers.push(ligneFinancements[i].pilier)
          axes.push(ligneFinancements[i].axe)
          montantBienServicePrevus.push(ligneFinancements[i].montantBienServicePrevus)
          montantBienServiceMobilises.push(ligneFinancements[i].montantBienServiceMobilises)
          montantBienServiceExecutes.push(ligneFinancements[i].montantBienServiceExecutes)
          montantInvestissementPrevus.push(ligneFinancements[i].montantInvestissementPrevus)
          montantInvestissementMobilises.push(ligneFinancements[i].montantInvestissementMobilises)
          montantInvestissementExecutes.push(ligneFinancements[i].montantInvestissementExecutes)
        }

        
        //console.log('libelle mode+++++++++++++',libelleModeFinancements)
        let formData = new FormData();
        formData.append("id", this.model.id);
        formData.append("_method", "put");
        formData.append("libelleModeFinancements",libelleModeFinancements);
        formData.append("montantModeFinancements",montantModeFinancements);
        
        /* if(autreMode){
          formData.append("libAutreModeFinance",libAutreModeFinance);
          formData.append("montantAutreModeFinance",montantAutreModeFinance);
        } */


        formData.append("structure_sources",structure_sources?.map((item)=>{return item?.id}));
        formData.append("structure_beneficiaires",structure_beneficiaires?.map((item)=>{return item?.id}));
        formData.append("regions",regions?.map((item)=>{return item?.id}));
        formData.append("piliers",piliers?.map((item)=>{return item?.id}));
        formData.append("axes",axes?.map((item)=>{return item?.id}));
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
        if(totalfiles>=1){
          for (var index = 0; index < totalfiles; index++) {
            formData.append("libelle_fichiers[]",files[index].libelle_fichier);
          }
          for (var index = 0; index < totalfiles; index++) {
            formData.append("input_fichiers[]",files[index].input_fichier);
          }
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

        console.log('Donées formulaire investissement ++++++: ',data)



       validation && this.$msasFileApi.post('/investissements/'+this.model.id,formData)
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
        this.selectedstructurebeneficiaires.splice(index,1);
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
      deleteFindMode2: function(index) {
        console.log('Index---- ',index);
        this.modes2.splice(index,1);
        this.selectedModeFinancements.splice(index,1);
        this.selectedModeFinancementsLibelle.splice(index,1);

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
      findStructureName (id) {
        return this.liststructures.filter(item => item.id === parseInt(id))[0]
      },
      findRegionName (id) {
        return this.listregions.filter(item => item.id === parseInt(id))[0]
      },
      findPilierName (id) {
        return this.listpiliers.filter(item => item.id === parseInt(id))[0]
      },
      findAxeName (id_pilier,id_axe) {
        return this.listpiliers.filter(item => item.id === parseInt(id_pilier))[0]?.axes.filter(item => item.id === parseInt(id_axe))[0]
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
        this.selectedDimension = e
        let modeFinanceInputs = this.listdimensions.filter(item => item.id === e)
        let predefModeFinanceInputs = modeFinanceInputs.length?modeFinanceInputs[0].ligne_modes:[]

        this.modeFinanceInputs = predefModeFinanceInputs.length?predefModeFinanceInputs.filter(item => item.predefini === '1'):[]
        this.autreModeFinanceInputs = predefModeFinanceInputs.length?predefModeFinanceInputs.filter(item => item.predefini === '0').map((item)=>{return item.libelle}):[]

        console.log('************ dimension',this.modeFinanceInputs)
        /*this.selectedDimension = e */
        
      },
      async changePilier(value) {
        this.showAxes=true
        this.selectedPiliers0= value
        this.listAxes0 = value.axes         
        console.log('************',value)
        //console.log('************',i)
      },
      async changeBailleur(value) {
        this.selectedBailleurs0= value
        //console.log('************',i)
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
      async changeAxe(value) {
        this.selectedAxes0 = value         
        console.log('************',value)

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
