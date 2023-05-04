<template>
  <v-container pl-0>
    <v-row>
      <v-col md="2" lg="2" sm="12">
        <v-container pl-0>
          <left-menu :items="leftmenuItems"></left-menu>
        </v-container>
      </v-col>
      <v-col md="9" lg="9" sm="12" class="full-height">
          <page-header :items="headerItems"></page-header>
          <list-usager></list-usager>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListUsager from '@/components/usagers/ListUsager'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer_usagers')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListUsager
    },
    mounted: function() {
      /* this.$store.dispatch('usagers/getList') */
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Accueil', icon: 'mdi-home-outline',link:'/dashboard',position:1  },
          { text: 'Nouvel usager', icon: 'mdi-account-plus-outline',link:'/usagers/addUsager',position:0 }
        ],
        headerItems: [
          {
            text: 'Liste des usagers',
            disabled: true,
            to: '/usagers',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
