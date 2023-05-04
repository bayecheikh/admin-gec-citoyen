<template>
  <div>
    <v-card-title class="col-12">
      <recherche-structure></recherche-structure>
      <!-- <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        outlined
        rounded
        dense
        hide-details
      ></v-text-field> -->
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="tab=='tout'?liststructures : liststructures.filter(structure => structure.active_account === tab)"
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
          </v-btn>  
              <v-btn icon class="col-3" v-on:click="supprimer()">
                <v-icon left class="font-small"> mdi-trash-can-outline </v-icon>
                <span class="font-small">Supprimer</span>
              </v-btn>-->
              <!-- <v-btn icon class="col-3" v-on:click="exporter()">
            <v-icon left class="font-small">
              mdi-file-export-outline
            </v-icon>
            <span class="font-small">Exporter</span>
          </v-btn> -->
            </div>
          </v-col>
          <v-col md="6" sm="12" lg="6" class="pt-0 pb-2 align-right-pagination">
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
          <v-card-title class="text-h5"> Confirmation </v-card-title>
          <v-card-text>Voulez-vous supprimer cet element ?</v-card-text>
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
            <v-btn color="red darken-1" text @click="deleteItem" outlined>
              Supprimer définitivement
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
        </v-row>
      </template>
      <template v-slot:[`item.source_financements`]="{ item }">
      <v-chip
        color="primary"
        small
        outlined
        class="my-1 mr-1"
        v-for="source_financement in item.source_financements"  :key="source_financement.id"
      >
        {{ source_financement.libelle_source}}
      </v-chip>
  </template>
  <template v-slot:[`item.type_sources`]="{ item }">
      <v-chip
        color="primary"
        small
        outlined
        class="my-1 mr-1"
        v-for="type_source in item.type_sources"  :key="type_source.id"
      >
        {{ type_source.libelle_type_source}}
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
              <v-list-item @click="visualiserItem(item)" link class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title>
                  <v-icon
                    small
                    class="mr-2"
                    
                  >
                    mdi-information-outline
                  </v-icon>Détail
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="editItem(item)" link class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title> 
                  <v-icon small class="mr-2"> mdi-pencil-outline </v-icon
                  >Modifier
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="$hasRole('super_admin')" @click="opendialog(item)" class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title>
                  <v-icon small class="mr-2" v-bind="attrs" v-on="on">
                    mdi-delete-outline </v-icon
                  >Supprimer
                </v-list-item-title>
              </v-list-item>
            </v-item-group>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import RechercheStructure from '@/components/structures/RechercheStructure';
  export default {
    components: {
      RechercheStructure
    },
    mounted: function() {
      this.getList(1)
    },
    computed: mapGetters({
      liststructures: 'structures/liststructures',
      headers: 'structures/headerstructures',
      totalpage: 'structures/totalpage',
      perpage: 'structures/perpage',
      datasearch: 'structures/datasearch',
    }),
    props: ['tab'],
    metaInfo () {
      return {
        tab: this.tab,
      }
    },
    methods: {
      getList(page){
          this.progress=true
          this.$msasApi.$get('/structures?page='+page)
        .then(async (response) => {
            console.log('total page ++++++++++',response)
            let totalPages = Math.ceil(response.data.total / response.data.per_page)
            this.$store.dispatch('structures/getTotalPage',totalPages)
            this.$store.dispatch('structures/getPerPage',response.data.per_page)
            this.$store.dispatch('structures/getList',response.data.data)
            console.log('total page ++++++++++',response.data.total / response.data.per_page)
        }).catch((error) => {
            /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
            this.progress=false
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
       getResult(page,param){
         this.progress=true
         this.$msasApi.get('/structure-multiple-search/'+param+'?page='+page)
          .then(async (response) => {
            console.log('Données reçus++++++++++++',response.data.data.data)
            await this.$store.dispatch('structures/getList',response.data.data.data)
            let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
            this.$store.dispatch('structures/getTotalPage',totalPages)
            this.$store.dispatch('structures/getPerPage',response.data.data.per_page)
            
        }).catch((error) => {
             /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
           // this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé')
             this.progress=false;
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
        this.$store.dispatch('structures/getDetail',item)
        this.$router.push('/structures/detail/'+item.id);
      },
      editItem (item) {
        this.$store.dispatch('structures/getDetail',item)
        this.$router.push('/structures/modifier/'+item.id);
      },
      async deleteItem () {
        this.dialog=false   
        this.$store.dispatch('toast/getMessage',{type:'processing',text:'Traitement en cours ...'})  
        this.$msasApi.$delete('/structures/'+this.activeItem.id)
        .then(async (response) => {             
            this.$store.dispatch('structures/deleteStructure',this.activeItem.id)
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
          let structure = this.selected.map(function(value){ return value})[0]
          this.$store.commit('structures/initdetail',structure)
          this.$router.push('/structures/detail/'+structure.id);
        }
      },
      modifier(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let structure = this.selected.map(function(value){ return value})[0]
          this.$store.commit('structures/initdetail',structure)
          this.$router.push('/structures/modifier/'+structure.id);
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
      }
    },
    data: () => ({
      dialog: false,
      progress:true,
      selected: [],
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
