<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-Gestionrh></list-Gestionrh>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListGestionrh from '@/components/Gestionrhs/ListGestionrh'
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
      ListGestionrh
    },
    mounted: function() {
      this.$store.dispatch('gestionrhs/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'Gestionrhs', icon: 'mdi-lock',link:'/Gestionrhs',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des offres',
            disabled: true,
            to: '/Gestionrhs',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
