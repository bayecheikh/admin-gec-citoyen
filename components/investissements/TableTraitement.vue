<template>
  <div>
        <div>
          <v-card-title class="col-12">
            <recherche-avance></recherche-avance>
          </v-card-title>
          <v-data-table
            :headers="headers"
             :items="listligneinvestissements"
            :single-select="singleSelect"
            item-key="id"
            :items-per-page="perpage"
            class="flat pt-4"
            :loading="progress"
            loading-text="Loading... Please wait"
            hide-default-footer
            :search="search"
          >
            <template v-slot:top="{}">
              <v-row class="mb-1 border-bottom-small d-flex">
                <v-col md="6" sm="12" lg="6" class="pb-0 pt-4">
                  <div class="row">
                    
                    <v-btn class="col-md-3 col-lg-3 col-sm-12 ml-6" v-on:click="exporterCSV()">
                      <v-icon left class="font-small">
                        mdi-file-export-outline
                      </v-icon>
                      <span class="font-small">Exporter en CSV</span>
                    </v-btn>
                  </div>
                </v-col>
                <v-col
                  md="6"
                  sm="12"
                  lg="6"
                  class="pt-0 pb-2 align-right-pagination"
                >
                  <v-pagination
                    v-model="page"
                    :length="totalpage"
                    total-visible="6"
                    next-icon="mdi-menu-right"
                    prev-icon="mdi-menu-left"
                    @input="handlePageChange"
                  ></v-pagination>
                </v-col>
                <div class="text-center">
                  <v-dialog v-model="dialog" width="500">
                    <v-card>
                      <v-card-title class="text-h5">
                        Confirmation
                      </v-card-title>
                      <v-card-text
                        >Voulez-vous supprimer cet element ?</v-card-text
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary darken-1"
                          text
                          @click="dialog = false"
                          outlined
                        >
                          Annuler
                        </v-btn>
                        <v-btn
                          color="red darken-1"
                          text
                          @click="deleteItem"
                          outlined
                        >
                          Supprimer définitivement
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-row>
            </template>
            <template v-slot:[`item.structure`]="{ item }">
              <div v-for="structure in item.structure" :key="structure.id">
                {{ structure.nom_structure}}
              </div>
            </template>
            <template v-slot:[`item.annee`]="{ item }">
              <div v-for="annee in item.annee" :key="annee.id">
                {{ annee.libelle}}
              </div>
            </template>
            <template v-slot:[`item.monnaie`]="{ item }">
              <div v-for="monnaie in item.monnaie" :key="monnaie.id">
                {{ monnaie.libelle}}
              </div>
            </template>
            <template v-slot:[`item.dimension`]="{ item }">
              <div v-for="dimension in item.dimension" :key="dimension.id">
                {{ dimension.libelle_dimension}}
              </div>
            </template>
            <template v-slot:[`item.pilier`]="{ item }">
              <div v-for="pilier in item.pilier" :key="pilier.id">
                {{ pilier.nom_pilier}}
              </div>
            </template>
            <template v-slot:[`item.axe`]="{ item }">
              <div v-for="axe in item.axe" :key="axe.id">
                {{ axe.nom_axe}}
              </div>
            </template>
            <template v-slot:[`item.structure_source`]="{ item }">
              <div v-for="structure_source in item.structure_source" :key="structure_source.id">
                {{ structure_source.nom_structure}}
              </div>
            </template>
            <template v-slot:[`item.structure_beneficiaire`]="{ item }">
              <div v-for="structure_beneficiaire in item.structure_beneficiaire" :key="structure_beneficiaire.id">
                {{ structure_beneficiaire.nom_structure}}
              </div>
            </template>
            <template v-slot:[`item.type_structure_source`]="{ item }">
              <div v-for="type_structure_source in item.type_structure_source" :key="type_structure_source.id">
                {{ type_structure_source.libelle_source}}
              </div>
            </template>
            <template v-slot:[`item.region`]="{ item }">
              <div v-for="region in item.region" :key="region.id">
                {{ region.nom_region}}
              </div>
            </template>
           
           <!-- <template v-slot:[`item.actions`]="{ item }">
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list shaped>
                  <v-item-group>
                    <v-list-item
                      @click="visualiserItem(item.investissement)"
                      link
                      class="custom-v-list-action pl-2 pr-1"
                    >
                      <v-list-item-title>
                        <v-icon small class="mr-2">
                          mdi-information-outline </v-icon
                        >Détail
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      @click="editItem(item)"
                      link
                      class="custom-v-list-action pl-2 pr-1"
                      v-if="item.status=='brouillon' || item.status=='rejete'"
                    >
                      <v-list-item-title>
                        <v-icon small class="mr-2">
                          mdi-pencil-outline </v-icon
                        >Modifier
                      </v-list-item-title>
                    </v-list-item>
                  </v-item-group>
                </v-list>
              </v-menu>
            </template>-->
          </v-data-table>
        </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import RechercheInvestissement from '@/components/investissements/RechercheInvestissement';
import RechercheAvance from '@/components/investissements/RechercheAvance';
  export default {
    components: {
      RechercheInvestissement,
      RechercheAvance
    },
    mounted: function() {    
      this.$hasPermission('brouillon') && this.tabItems.push({title:'Brouillons',value:'brouillon'})
      this.$hasPermission('a_valider') && this.tabItems.push({title:'A valider',value:'a_valider'})
      this.$hasPermission('rejete') && this.tabItems.push({title:'Rejetés',value:'rejete'})
      this.$hasPermission('publie') && this.tabItems.push({title:'Publiés',value:'publie'})
      
      let data = {
          page:1,
          annees : [],
          monnaies : [],
          dimensions : [],
          type_structure_sources : [],
          structure_sources: [],
          structure_beneficiaires: [],
          regions: [] ,
          piliers: [],
          axes : [],
          structure_enregistrements: [],         
        }
        this.$store.commit('ligneinvestissements/initdatasearch',{...data})
      this.getResult(data)
    },
    computed: mapGetters({
      listligneinvestissements: 'ligneinvestissements/listligneinvestissements',
      headers: 'ligneinvestissements/headerligneinvestissements',
      totalpage: 'ligneinvestissements/totalpage',
      perpage: 'ligneinvestissements/perpage',
      datasearch: 'ligneinvestissements/datasearch',
    }),
    methods: {
      getList(page){
          this.progress=true
          this.$msasApi.$get('/recherche_avance_investissements?page='+page)
        .then(async (response) => {
          console.log('Données reçus++++++++++++',response.data.data.data)
            await this.$store.dispatch('ligneinvestissements/getList',response.data.data.data)
            let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
            this.$store.dispatch('ligneinvestissements/getTotalPage',totalPages)
            this.$store.dispatch('ligneinvestissements/getPerPage',response.data.data.per_page)
            
        }).catch((error) => {
            /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
            this.progress=false
        });
        //console.log('total items++++++++++',this.paginationinvestissement)
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
      handlePageChange(value){
        console.log('-------------datasearch est',this.datasearch)
        let data = {...this.datasearch,page:value}
        this.$store.commit('investissements/initdatasearch',data)
        this.getResult(data)

      },
      visualiserItem (item) {
        this.$store.dispatch('investissements/getDetail',item)
        this.$router.push('/investissements/detail/'+item.id);
      },
      editItem (item) {
        this.$store.dispatch('investissements/getDetail',item)
        this.$router.push('/investissements/modifier/'+item.id);
      },
      async deleteItem () {
        this.dialog=false
        this.$store.dispatch('toast/getMessage',{type:'processing',text:'Traitement en cours ...'})
        this.$msasApi.$delete('/investissements/'+this.activeItem.id)
        .then(async (response) => {
            this.$store.dispatch('investissements/deleteinvestissement',this.activeItem.id)
            this.$store.dispatch('toast/getMessage',{type:'success',text:response.data.message || 'Suppression réussie'})
            }).catch((error) => {
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de la suppression'})
              console.log('Code error ++++++: ',error)
            }).finally(() => {
            console.log('Requette envoyé ')
        });
      },
       opendialog (item) {
        this.dialog=true
        this.activeItem=item
      },
      exporterItem (item) {
        alert('Exporter '+item.id)
      },
      visualiser(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let investissement = this.selected.map(function(value){ return value})[0]
          this.$store.commit('investissements/initdetail',investissement)
          this.$router.push('/investissements/detail/'+investissement.id);
        }
      },
      modifier(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let investissement = this.selected.map(function(value){ return value})[0]
          this.$store.commit('investissements/initdetail',investissement)
          this.$router.push('/investissements/modifier/'+investissement.id);
        }
      },
      supprimer(){
        if(this.selected.length>=1)
        alert('Supprimer '+this.selected.map(function(value){ return value.id}))
        else
        alert('Veuillez selectionner un element')
      },
      exporterCSV(){
         this.progress=true    
         console.log('Données formulaire++++++++++++',this.datasearch)  
         let formData = new FormData();
        formData.append("structure_sources",this.datasearch.structure_sources);
        formData.append("structure_enregistrements",this.datasearch.structure_enregistrements);
        formData.append("type_structure_sources",this.datasearch.type_structure_sources);
        formData.append("structure_beneficiaires",this.datasearch.structure_beneficiaires);
        formData.append("regions",this.datasearch.regions);
        formData.append("piliers",this.datasearch.piliers);
        formData.append("axes",this.datasearch.axes);

        formData.append("annees",this.datasearch.annees);
        formData.append("monnaies",this.datasearch.monnaies);
        formData.append("dimensions",this.datasearch.dimensions);
        formData.append("regions",this.datasearch.regions);

         this.$msasApi.post('/export_csv_ligne_financements',formData)
          .then(async (response) => {

            console.log('Données reçus++++++++++++',response.data)
            var fileURL = window.URL.createObjectURL(new Blob(["\ufeff",response.data]));
            var fileLink = document.createElement('a');
          
            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'investissements.csv');
            document.body.appendChild(fileLink);
          
            fileLink.click();
            
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
      goToAddinvestissement() {
        this.$router.push('/investissements/addInvestissement');
      },
    },
    data: () => ({
      tab: 'tout',
      tabItems: [],
      selected: [],
      dialog: false,
      progress:true,
      search:'',
      items:[],
      page: 1,
      totalPages:1,
      pageCount: '',
      itemsPerPage:'',
      path:'',
      totalItems:0,
      options: {},
      selectedItem:0,
      activeItem:{}
    })
  }
</script>
<style scoped>
.border-bottom-small {
  border-bottom: solid 1px #80808052;
}
</style>
