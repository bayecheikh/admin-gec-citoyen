<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="(item,i) in tabItems" :key="i">
            {{item.title}}</v-tab
          >
        </v-tabs>
      </div>
      <div class="ml-auto p-2" v-if="$hasPermission('ajouter_investissement')">
        <v-btn depressed rounded color="primary" @click="goToAddinvestissement">
          <v-icon left> mdi-plus </v-icon>
          Nouveau financement
        </v-btn>
      </div>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item,i) in tabItems" :key="i">
        <div>
          <v-card-title class="col-12">
            <!-- <recherche-investissement></recherche-investissement> -->
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="item.value=='publie'?listinvestissements && listinvestissements.filter(investissement => investissement.status=='publie'):listinvestissements && listinvestissements.filter(investissement => (item.value==investissement.status & $hasPermission(investissement.state) & $hasPermission(investissement.status)))"
            item-key="id"
            :items-per-page="perpage"
            class="flat pt-4"
            :loading="progress"
            loading-text="Loading... Please wait"
            hide-default-footer
          >
            <template v-slot:top="{}">
              <v-row class="mb-1 border-bottom-small d-flex">
                <v-col md="6" sm="12" lg="6" class="pb-0 pt-4">
                  <div class="row">
                    <!-- <v-btn icon class="col-3" v-on:click="visualiser()">
            <v-icon left class="font-small">
              mdi-file-document-outline
            </v-icon>
            <span class="font-small">Visualiser</span>
          </v-btn> 
          <v-btn icon class="col-3" v-on:click="modifier()">
            <v-icon left class="font-small">
              mdi-square-edit-outline
            </v-icon>
            <span class="font-small">Modifier</span>
          </v-btn>  -->
                    <!--<v-btn icon class="col-3" v-on:click="supprimer()">
                <v-icon left class="font-small"> mdi-trash-can-outline </v-icon>
                <span class="font-small">Supprimer</span>
              </v-btn> -->
                    <!--<v-btn icon class="col-3" v-on:click="exporter()">
            <v-icon left class="font-small">
              mdi-file-export-outline
            </v-icon>
            <span class="font-small">Exporter</span>
          </v-btn>-->
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
            <template v-slot:[`item.structure`]="{ item }">
              <div v-for="structure in item.structure" :key="structure.id">
                {{ structure.nom_structure}}
              </div>
            </template>
            <template v-slot:[`item.source`]="{ item }">
              <div v-for="source in item.source" :key="source.id">
                {{ source.libelle_source}}
              </div>
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="(item.status=='a_valider' && 'primary') || (item.status=='rejete' && 'error') || (item.status=='brouillon' && 'orange') || (item.status=='publie' && 'green')"
                small
                outlined
                class="my-1 mr-1"
              >
                {{ (item.status=='a_valider' && 'A valider') || (item.status=='rejete' && 'Rejeté') || (item.status=='brouillon' && 'Brouillon') || (item.status=='publie' && 'Publié')}}
              </v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list shaped>
                  <v-item-group>
                    <v-list-item
                      @click="visualiserItem(item)"
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
            </template>
          </v-data-table>
        </div>
      </v-tab-item>
    </v-tabs-items>
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
      this.$hasPermission('rejete') && this.tabItems.push({title:'A corriger',value:'rejete'})
      this.$hasPermission('publie') && this.tabItems.push({title:'Publiés',value:'publie'})
      
      let data = {
          page:1,
          annee : null,
          monnaie : null,
          dimension : null,
          region : null,
          pilier: null,
          axe: null ,
          departement: null,
          structure : null,
          type_source: null,
          source: null         
        }
        this.$store.commit('investissements/initdatasearch',data)
      this.getList(1)
    },
    computed: mapGetters({
      listinvestissements: 'investissements/listinvestissements',
      headers: 'investissements/headerinvestissements',
      totalpage: 'investissements/totalpage',
      perpage: 'investissements/perpage',
      datasearch: 'ligneinvestissements/datasearch',
    }),
    methods: {
      getList(page){
          this.progress=true
          this.$msasApi.$get('/investissements?page='+page)
        .then(async (response) => {
            console.log('list investissement ++++++++++',response)
            let totalPages = Math.ceil(response.data.total / response.data.per_page)
            this.$store.dispatch('investissements/getTotalPage',totalPages)
            this.$store.dispatch('investissements/getPerPage',response.data.per_page)
            this.$store.dispatch('investissements/getList',response.data.data)
            console.log('total page ++++++++++',response.data.total / response.data.per_page)
        }).catch((error) => {
            /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
             //this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
            this.progress=false
        });
        //console.log('total items++++++++++',this.paginationinvestissement)
      },
      getResult(param){
         this.progress=true
       
         this.$msasFileApi.post('/recherche_avance_investissements',param)
          .then(async (response) => {
            console.log('Données reçus++++++++++++',response.data.data.data)
            await this.$store.dispatch('investissements/getList',response.data.data.data)
            let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
            this.$store.dispatch('investissements/getTotalPage',totalPages)
            this.$store.dispatch('investissements/getPerPage',response.data.data.per_page)
            
        }).catch((error) => {
             /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
           // this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé')
             this.progress=false;
             this.loading = false;
        });
      },
      handlePageChange(value){
        console.log('-------------datasearch est',this.datasearch)
        if(this.datasearch ==null)
        this.getList(value)
        else
        this.getResult(value,this.datasearch)

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
      exporter(){
        if(this.selected.length>=1)
        alert('Exporter '+this.selected.map(function(value){ return value.id}))
        else
        alert('Veuillez selectionner un element')
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
