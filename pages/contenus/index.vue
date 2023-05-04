<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-contenu></list-contenu>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListContenu from '@/components/contenus/ListContenu'
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
      ListContenu
    },
    mounted: function() {
      this.$store.dispatch('contenus/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'contenus', icon: 'mdi-lock',link:'/contenus',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des contenus',
            disabled: true,
            to: '/contenus',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
