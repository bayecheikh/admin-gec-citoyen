<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-organismes></list-organismes>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListOrganismes from '@/components/organismes/ListOrganismes'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListOrganismes
    },
    mounted: function() {
      this.$store.dispatch('organismes/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'organismes', icon: 'mdi-lock',link:'/organismes',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des organismes',
            disabled: true,
            to: '/organismes',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
