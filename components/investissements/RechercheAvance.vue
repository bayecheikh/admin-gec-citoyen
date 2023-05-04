<template>
  <div>
    <v-form class="" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-card class="mx-auto mb-5 pl-10 pt-10 pr-10 pb-5">
        <v-row>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedAnnees"
              :items="listannees"
              outlined
              dense
              label="Année"
              item-text="libelle"
              item-value="id"
              multiple
              @change="changeAnnee"
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedMonnaies"
              :items="listmonnaies"
              outlined
              dense
              label="Monnaie"
              item-text="libelle"
              item-value="id"
              multiple
              @change="changeMonnaie"
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedRegions"
              :items="listregions"
              
              outlined
              dense
              label="Région"
              item-text="nom_region"
              item-value="id"
              multiple
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
              <v-autocomplete
              ref="inputRef"
                v-model="selectedPiliers"
                :items="listpiliers"
                
                outlined
                dense
                label="Piliers"
                item-text="nom_pilier"
                item-value="id"
                multiple
                
              >
              </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12" >
            <v-autocomplete
            ref="inputRef"
              v-model="selectedAxes"
              :items="listaxes"
              outlined
              dense
              label="Axe"
              item-text="nom_axe"
              item-value="id"
              multiple
              
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedDimensions"
              :items="listdimensions"
              outlined
              dense
              label="Dimension"
              item-text="libelle_dimension"
              item-value="id"
              multiple
              
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedTypeStructureSources"
              :items="listsources"
              outlined
              dense
              label="Type Structure"
              item-text="libelle_source"
              item-value="id"
              multiple
              
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedStructureEnregistrements"
              :items="liststructures"
              outlined
              dense
              label="Structure d'enregistrement"
              item-text="nom_structure"
              item-value="id"
              multiple
              
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedStructureSources"
              :items="liststructures"
              outlined
              dense
              label="Structure Bailleur"
              item-text="nom_structure"
              item-value="id"
              multiple
              
            >
            </v-autocomplete>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <v-autocomplete
            ref="inputRef"
              v-model="selectedStructureBeneficiaires"
              :items="liststructures"
              outlined
              dense
              label="Structure Bénéficiaires"
              item-text="nom_structure"
              item-value="id"
              multiple
              
            >
            </v-autocomplete>
          </v-col>
                  
          <v-col lg="4" md="4" sm="12" class="d-flex">
            <v-btn :loading="loading" depressed class="mr-4 text-white" color="primary" @click="submitForm">
            Lancer la recherche
            </v-btn>
            
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    components: {
    },
    computed: {
      ...mapGetters({
      listannees: 'annees/listannees',
      listmonnaies: 'monnaies/listmonnaies',
      listdimensions: 'dimensions/listdimensions',
      listregions: 'regions/listregions',
      listmodefinancements: 'modefinancements/listmodefinancements',
      listbailleurs: 'bailleurs/listbailleurs',
      listpiliers: 'piliers/listpiliers',
      listaxes: 'axes/listaxes',
      listsources: 'sources/listsources',
      liststructures: 'structures/selectliststructures',
      
    })},
    data: () => ({
      loading: false,
      message:null,
      color:null,
      valid: true,
      progress:true,
      items:[],
      page: 1,
      totalPages:1,
      inputfichiers:[],
      libelle_fichiers:[],
      fichiers:[],
      counterrow:1,
      counterrow_fichier:1,
      filename : '',
      loading: false,
      message:null,
      color:null,
      valid: true,
      listBailleurs:[],
      listPiliers:[],
      listAxes:[],
      selectedPiliers:[],
      selectedAxes:[],
      selectedAnnees: [],
      selectedMonnaies: [],
      selectedDimensions: [],
      selectedRegions: [],
      selectedStructureEnregistrements: [],
      selectedStructureSources: [],
      selectedStructureBeneficiaires:[],
      selectedTypeStructureSources:[],
      model: {
        libAutreModeFinance:'',
        montantAutreModeFinance:''
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
        rolesRules: [
          v => (v && !!v.length) || 'Role est obligatoire',
        ],
        telephoneRules: [
          v => !!v || 'Téléphone est obligatoire',
        ],
        country_codeRules: [
          v => !!v || 'L\'indicatif du pays est obligatoire',
        ],
        selectRules: [
          v => (v && v== 0) || 'Ce obligatoire',
        ],
        structure_idRules: [
          v => (!!v) || 'Structure est obligatoire',
        ],
        adresseRules: [
          v => !!v || 'Adresse est obligatoire',
          v => (v && v.length >= 1) || 'Adresse doit etre inférieur à 50 caratères',
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

        let annee = this.selectedAnnee?.id || null
        let monnaie = this.selectedMonnaie?.id || null
        let region = this.selectedRegion?.id || null
        let dimension = this.selectedDimension || null
        let bailleurs = this.selectedBailleurs?.id || null
        let piliers = this.selectedPiliers?.id || null
        let axes = this.selectedAxes?.id || null
        let departement = this.slectedDepartement?.id || null
        let structure = this.selectedStructure?.id || null
        let type_source = this.selectedType_source?.id || null
        let source = this.selectedSource?.id || null 

        let data = {
          page:1,
          annees : this.selectedAnnees,
          monnaies : this.selectedMonnaies,
          dimensions : this.selectedDimensions,
          type_structure_sources : this.selectedTypeStructureSources,
          structure_sources: this.selectedStructureSources,
          structure_beneficiaires: this.selectedStructureBeneficiaires,
          regions: this.selectedRegions ,
          piliers: this.selectedPiliers,
          axes : this.selectedAxes,
          structure_enregistrements: this.selectedStructureEnregistrements,         
        }

       this.$store.commit('ligneinvestissements/initdatasearch',{...data})

        console.log('Donées formulaire recherche ++++++: ',data)
        this.getResult(data)
      },
      getResult(param){
        this.progress=true  
        let formData = new FormData();
        formData.append("structure_sources",param.structure_sources);
        formData.append("structure_enregistrements",param.structure_enregistrements);
        formData.append("type_structure_sources",param.type_structure_sources);
        formData.append("structure_beneficiaires",param.structure_beneficiaires);
        formData.append("regions",param.regions);
        formData.append("piliers",param.piliers);
        formData.append("axes",param.axes);

        formData.append("annees",param.annees);
        formData.append("monnaies",param.monnaies);
        formData.append("dimensions",param.dimensions);
        formData.append("regions",param.regions);


         console.log('données recherche ligne financements',param)    
         this.$msasFileApi.post('/recherche_ligne_financements',formData)
          .then(async (response) => {
            console.log('Données lignes reçus++++++++++++',response)
            await this.$store.dispatch('ligneinvestissements/getList',response.data.data.data)
            let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
            this.$store.dispatch('ligneinvestissements/getTotalPage',totalPages)
            this.$store.dispatch('ligneinvestissements/getPerPage',response.data.data.per_page)
            
        }).catch((error) => {
             /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
            this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé')
             this.progress=false;
             this.loading = false;
        });
      },
      resetForm () {
        this.$refs.form.reset()
      },
      resetValidationForm () {
        this.$refs.form.resetValidation()
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
        console.log('************',e)
        this.selectedDimension = e
        
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
      onClearClicked () {

          this.page  = null
          this.selectedAnnees = null
          this.selectedMonnaies = null
          this.selectedDimensions = null
          this.selectedTypeStructureSources = null
          this.selectedStructureSources = null
          this.selectedStructureBeneficiaires = null
          this.selectedRegions  = null
          this.selectedPiliers = null
          this.selectedAxes = null
          this.selectedStructureEnregistrements   = null       

        let data = {
          page:1,
          annees : null,
          monnaies : null,
          dimensions : null,
          type_structure_sources : null,
          structure_sources: null,
          structure_beneficiaires: null,
          regions: null ,
          piliers: null,
          axes : null,
          structure_enregistrements: null,         
        }

       this.$store.commit('investissements/initdatasearch',data)
       this.getResult(data)
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
