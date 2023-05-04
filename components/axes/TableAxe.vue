<template>
<div>
  <v-card-title class="col-6">
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        outlined
        rounded
        dense
        hide-details
      ></v-text-field>
</v-card-title>
<v-data-table

  :headers="headers"
  :items="tab=='tout'?listaxes : listaxes.filter(axe => axe.status === tab)"

  item-key="id"
  items-per-page="5"

  class="flat pt-4"
  :loading="listaxes.length?false:true" 
  loading-text="Loading... Please wait"
  :rows-per-page-items="[10,20,30,40,50]"
  hide-default-footer
  :search="search"
>
  <template v-slot:top="{ pagination, options, updateOptions }">
    <v-row class="mb-1 border-bottom-small">
      <v-col md="6" sm="12" lg="6" class="pb-0 pt-4">
        <div class="row"> 
           
        </div>
      </v-col>
      <v-col md="6" sm="12" lg="6" class="pt-0 pb-2">  
        <v-data-footer 
          :pagination="pagination" 
          :options="options"
          @update:options="updateOptions"
          items-per-page-text="$vuetify.dataTable.itemsPerPageText" class="border-top-none margin-none"
          itemsPerPageText= ''
        />
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
 <template v-slot:[`item.actions`]="{ item }">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list shaped>
            <v-item-group>
              <!-- <v-list-item @click="visualiserItem(item)" link class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title>
                  <v-icon
                    small
                    class="mr-2"
                    
                  >
                    mdi-information-outline
                  </v-icon>Détail
                </v-list-item-title>
              </v-list-item> -->
              <v-list-item @click="editItem(item)" link class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title> 
                  <v-icon small class="mr-2"> mdi-pencil-outline </v-icon
                  >Modifier
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="$hasRole('super_admin')" @click="opendialog(item)" class="custom-v-list-action pl-2 pr-1" >
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
  export default {
    computed: mapGetters({
      listaxes: 'axes/listaxes',
      headers: 'axes/headeraxes'
    }),
    props: ['tab'],
    metaInfo () {
      return {
        tab: this.tab,
      }
    },
    methods: {
      visualiserItem (item) {   
        this.$store.dispatch('axes/getDetail',item)
        this.$router.push('/axes/detail/'+item.id);
      },
      editItem (item) {   
        this.$store.dispatch('axes/getDetail',item)
        this.$router.push('/axes/modifier/'+item.id);
      },
       deleteItem (item) {
        this.dialog=false   
        this.$store.dispatch('toast/getMessage',{type:'processing',text:'Traitement en cours ...'}) 
        this.$msasApi.$delete('/axes/'+this.activeItem.id)
        .then(async (response) => { 
            this.$store.dispatch('axes/deleteaxe',this.activeItem.id)
            this.$store.dispatch('toast/getMessage',{type:'success',text:response.data.message || 'Suppression réussie'})
            }).catch((error) => {
              this.$store.dispatch('toast/getMessage',{type:'error',text:error || 'Echec de la suppression'})
              console.log('Code error ++++++: ', error)
            }).finally(() => {
              
            console.log('Requette envoyé ')
        });
        /* alert('Supprimer '+item.id) */
      },
      exporterItem (item) {
        alert('Exporter '+item.id)
      },
      visualiser(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let axe = this.selected.map(function(value){ return value})[0]
          this.$store.commit('axes/initdetail',axe)
          this.$router.push('/axes/detail/'+axe.id);
        }
      },
      modifier(){
        if(this.selected.length!=1)
        alert('Veuillez selectionner un element')
        else{
          let axe = this.selected.map(function(value){ return value})[0]
          this.$store.commit('axes/initdetail',axe)
          this.$router.push('/axes/modifier/'+axe.id);
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
      opendialog (item) {
        this.dialog=true
        this.activeItem=item
      },
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
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>