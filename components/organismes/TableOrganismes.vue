<template>
  <div>
    <v-card-title class="d-flex">
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Rechercher" outlined rounded dense
        hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="tab == 'tout' ? listorganismes : listorganismes" item-key="id"
      items-per-page="20" class="flat pt-4" :loading="listorganismes.length ? false : true"
      loading-text="Chargement... Patientez svp" :rows-per-page-items="[10, 20, 30, 40, 50]" hide-default-footer
      :search="search">
      <template v-slot:top="{ pagination, options, updateOptions }">
        <v-row class="mb-1 border-bottom-small">
          <v-col md="6" sm="12" lg="6" class="pb-0 pt-4">
            <div class="row">
              <!--<v-btn icon class="col-3" v-on:click="supprimer()">
            <v-icon left class="font-small">
              mdi-trash-can-outline
            </v-icon>
            <span class="font-small">Supprimer</span>
          </v-btn>-->
            </div>
          </v-col>
          <v-col md="6" sm="12" lg="6" class="pt-0 pb-2">
            <v-data-footer :pagination="pagination" :options="options" @update:options="updateOptions"
              items-per-page-text="$vuetify.dataTable.itemsPerPageText" class="border-top-none margin-none"
              itemsPerPageText='' />
          </v-col>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <v-card>
                <v-card-title class="text-h5"> Confirmation </v-card-title>
                <v-card-text>Voulez-vous supprimer cet élément ?</v-card-text>
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
      <template v-slot:[`item.categories`]="{ item }">
        <v-chip color="primary" small outlined class="my-1 mr-1" v-for="categorie in item.categories"
          :key="categorie.libelle">
          {{ categorie.libelle }}
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
              <v-list-item @click="opendialog(item)" class="custom-v-list-action pl-2 pr-1">
                <v-list-item-title>
                  <v-icon small class="mr-2" v-bind="attrs" v-on="on">
                    mdi-delete-outline </v-icon>Supprimer
                </v-list-item-title>
              </v-list-item>
            </v-item-group>
          </v-list>
        </v-menu>
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <v-switch :input-value="item.status == 1 ? true : false" color="success" hide-details
          @change="activeDesactiveOrganisme(item.id, $event)"></v-switch>

      </template>
    </v-data-table>
  </div>
</template>



<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  mounted: function () {
    this.$store.dispatch('categories/getList')

  },
  computed: mapGetters({
    listorganismes: 'organismes/listorganismes',
    headers: 'organismes/headerorganismes',
    listcategories: 'categories/listcategories',
  }),
  props: ['tab'],
  metaInfo() {
    return {
      tab: this.tab,
    }
  },
  methods: {
    activeDesactiveOrganisme(id, newValue) {
      const nouveauStatut = newValue ? 1 : 0;

      this.dialog = false
      this.$store.dispatch('toast/getMessage', { type: 'processing', text: 'Traitement en cours ...' })
      this.$gecApi.$patch('/structures/' + id, { 'status': nouveauStatut })
        .then(async (response) => {
    
          this.$store.dispatch('toast/getMessage', { type: 'success', text: 'Opération réussie' })
        }).catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: 'Opération échouée' })
          
        }).finally(() => {
          
        });
    },
    visualiserItem(item) {
      this.$store.dispatch('organismes/getDetail', item)
      this.$router.push('/organismes/detail/' + item.id);
    },
    editItem(item) {
      this.$store.dispatch('organismes/getDetail', item)
      this.$router.push('/organismes/modifier/' + item.id);
    },
    deleteItem(item) {
      this.dialog = false
      this.$store.dispatch('toast/getMessage', { type: 'processing', text: 'Traitement en cours ...' })
      this.$gecApi.$delete('/structures/' + this.activeItem.id)
        .then(async (response) => {
          
          this.$store.dispatch('organismes/deleteorganisme', this.activeItem.id)
          this.$store.dispatch('toast/getMessage', { type: 'success', text: response.data?.data?.message || 'Suppression réussie' })
        }).catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la suppression' })
          
        }).finally(() => {

          
        });
      /* alert('Supprimer '+item.id) */
    },
    exporterItem(item) {
      alert('Exporter ' + item.id)
    },
    visualiser() {
      if (this.selected.length != 1)
        alert('Veuillez sélectionner un élément')
      else {
        let contenu = this.selected.map(function (value) { return value })[0]
        this.$store.commit('organismes/initdetail', contenu)
        this.$router.push('/organismes/detail/' + contenu.id);
      }
    },
    modifier() {
      if (this.selected.length != 1)
        alert('Veuillez sélectionner un élément')
      else {
        let contenu = this.selected.map(function (value) { return value })[0]
        this.$store.commit('organismes/initdetail', contenu)
        this.$router.push({ path: '/organismes/modifier/' + contenu.id, query: { categorie_href: "organismes" } });
      }
    },
    supprimer() {
      if (this.selected.length >= 1)
        alert('Supprimer ' + this.selected.map(function (value) { return value.id }))
      else
        alert('Veuillez sélectionner un élément')
    },
    exporter() {
      if (this.selected.length >= 1)
        alert('Exporter ' + this.selected.map(function (value) { return value.id }))
      else
        alert('Veuillez sélectionner un élément')
    },
    opendialog(item) {
      this.dialog = true
      this.activeItem = item
    },
    customFilter(item, search, filter) {
      search.toString().includes(item.categories);
    }
  },
  data: () => ({
    status: [0, 1],
    headerorganismes: [
      /* {
          text: 'Nom',
          align: 'start',
          sortable: true,
          value: 'name',
      }, */
      { text: 'Titre', value: 'titre' },
      { text: 'Catégorie', value: 'categories', sortable: true },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
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
    totalItems: 0,
    options: {},
    selectedItem: 0,
    activeItem: {}
  })
}
</script>
<style scoped>
.border-bottom-small {
  border-bottom: solid 1px #80808052;
}
</style>