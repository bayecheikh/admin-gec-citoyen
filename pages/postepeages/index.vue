<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-postepeage></list-postepeage>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListPostepeage from '@/components/postepeages/ListPostepeage'
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
      ListPostepeage
    },
    mounted: function() {
      this.$store.dispatch('postepeages/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'postepeages', icon: 'mdi-lock',link:'/postepeages',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des poste de peages',
            disabled: true,
            to: '/postepeages',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
