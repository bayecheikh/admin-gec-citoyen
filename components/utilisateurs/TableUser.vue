<template>
  <div>

    <v-card-title class="col-6">
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Rechercher" outlined rounded dense
        hide-details></v-text-field>
    </v-card-title>

    <v-data-table v-model="selected" :headers="headers"
      :items="tab == 'tout' ? listUsers.filter(user => user.roles[0] && user.roles[0].name != 'super_admin') : listUsers.filter(user => user.status === tab)"
      :single-select="singleSelect" item-key="id" :items-per-page="perpage" class="flat pt-4" :loading="progress"
      loading-text="Loading... Please wait" hide-default-footer :search="search">
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
            <v-pagination v-model="page" :length="totalpage" total-visible="6" next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left" @input="handlePageChange"></v-pagination>
          </v-col>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <v-card>
                <v-card-title class="text-h5"> Confirmation </v-card-title>
                <v-card-text>Voulez-vous supprimer cet element ?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary darken-1" text @click="dialog = false" outlined>
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
      <template v-slot:[`item.status`]="{ item }">
        <v-switch :input-value="item.status == 'actif' ? true : false" color="success" hide-details
          @change="actveDesactiveUser(item.id)" v-if="$hasRole('super_admin')"></v-switch>
        <div v-else>{{ item.status == 'actif' ? 'Actif' : 'Inactif' }}</div>
      </template>

      <template v-slot:[`item.roles`]="{ item }">
        <v-chip color="primary" small outlined class="my-1 mr-1" v-for="role in item.roles" :key="role.value">
          {{ role.description }}
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
                  <v-icon small class="mr-2">
                    mdi-information-outline
                  </v-icon>Détail
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="editItem(item)" link class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title>
                  <v-icon small class="mr-2"> mdi-pencil-outline </v-icon>Modifier
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="$hasRole('super_admin')" @click="opendialog(item)"
                class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title>
                  <v-icon small class="mr-2" v-bind="attrs" v-on="on">
                    mdi-delete-outline </v-icon>Supprimer
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
import { mapGetters } from 'vuex'
import RechercheUser from '@/components/utilisateurs/RechercheUser';
export default {
  components: {
    RechercheUser
  },
  mounted: function () {
    this.getList(1)
  },
  computed: mapGetters({
    listUsers: 'utilisateurs/listutilisateurs',
    headers: 'utilisateurs/headerutilisateurs',
    totalpage: 'utilisateurs/totalpage',
    perpage: 'utilisateurs/perpage',
    datasearch: 'utilisateurs/datasearch',
  }),
  props: ['tab'],

  methods: {
    getList(page) {
      this.progress = true
      this.$gecApi.$get('/users?page=' + page)
        .then(async (response) => {
          
          let totalPages = Math.ceil(response.data.total / response.data.per_page)
          this.$store.dispatch('utilisateurs/getTotalPage', totalPages)
          this.$store.dispatch('utilisateurs/getPerPage', response.data.per_page)
          this.$store.dispatch('utilisateurs/getList', response.data.data)
  
        }).catch((error) => {
          /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
          // this.$toast.error(error?.response?.data?.message).goAway(3000)
          
        }).finally(() => {
          
          this.progress = false
        });
    
    },
    getResult(page, param) {
      this.progress = true
      this.$gecApi.get('/user-multiple-search/' + param + '?page=' + page)
        .then(async (response) => {
          
          await this.$store.dispatch('utilisateurs/getList', response.data.data.data)
          let totalPages = Math.ceil(response.data.data.total / response.data.data.per_page)
          this.$store.dispatch('utilisateurs/getTotalPage', totalPages)
          this.$store.dispatch('utilisateurs/getPerPage', response.data.data.per_page)

        }).catch((error) => {
          /* this.$toast.global.my_error().goAway(1500) */ //Using custom toast
          // this.$toast.error(error?.response?.data?.message).goAway(3000)
          
        }).finally(() => {
          
          this.progress = false;
        });
    },
    actveDesactiveUser(id) {
   
      this.dialog = false
      this.$store.dispatch('toast/getMessage', { type: 'processing', text: 'Traitement en cours ...' })
      this.$gecApi.$get('/active_user/' + id)
        .then(async (response) => {
      
          this.$store.dispatch('toast/getMessage', { type: 'success', text: response.data.message || 'Opération réussie' })
        }).catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Opération échoué' })
          
        }).finally(() => {
          
        });
    },
    handlePageChange(value) {
    
      if (this.datasearch == null)
        this.getList(value)
      else
        this.getResult(value, this.datasearch)

    },
    visualiserItem(item) {
      this.$store.dispatch('utilisateurs/getDetail', item)
      this.$router.push('/utilisateurs/detail/' + item.id);
    },
    editItem(item) {
      this.$store.dispatch('utilisateurs/getDetail', item)
      this.$router.push('/utilisateurs/modifier/' + item.id);
    },
    async deleteItem() {
      this.dialog = false
      this.$store.dispatch('toast/getMessage', { type: 'processing', text: 'Traitement en cours ...' })
      this.$gecApi.$delete('/users/' + this.activeItem.id)
        .then(async (response) => {
          this.$store.dispatch('utilisateurs/deleteUtilisateur', this.activeItem.id)
          this.$store.dispatch('toast/getMessage', { type: 'success', text: response.data.message || 'Suppression réussie' })
        }).catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la suppression' })
          
        }).finally(() => {
          
        });
    },
    opendialog(item) {
      this.dialog = true
      this.activeItem = item
    },
    
    visualiser() {
      if (this.selected.length != 1)
        alert('Veuillez selectionner un element')
      else {
        let user = this.selected.map(function (value) { return value })[0]
        this.$store.commit('utilisateurs/initdetail', user)
        this.$router.push('/utilisateurs/detail/' + user.id);
      }
    },
    modifier() {
      if (this.selected.length != 1)
        alert('Veuillez selectionner un element')
      else {
        let user = this.selected.map(function (value) { return value })[0]
        this.$store.commit('utilisateurs/initdetail', user)
        this.$router.push('/utilisateurs/modifier/' + user.id);
      }
    },
    supprimer() {
      if (this.selected.length >= 1)
        alert('Supprimer ' + this.selected.map(function (value) { return value.id }))
      else
        alert('Veuillez selectionner un element')
    },
    exporter() {
      if (this.selected.length >= 1)
        alert('Exporter ' + this.selected.map(function (value) { return value.id }))
      else
        alert('Veuillez selectionner un element')
    }
  },
  data: () => ({
    status: ['actif', 'inactif'],
    dialog: false,
    progress: true,
    selected: [],
    search: '',
    items: [],
    page: 1,
    totalPages: 1,
    pageCount: '',
    itemsPerPage: '',
    path: '',
    
    options: {},
    
    activeItem: {}
  })
}
</script>
<style scoped>
.border-bottom-small {
  border-bottom: solid 1px #80808052;
}
</style>
