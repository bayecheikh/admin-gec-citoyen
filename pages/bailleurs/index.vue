<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-bailleur></list-bailleur>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListBailleur from '@/components/bailleurs/ListBailleur'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-bailleurs')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListBailleur
    },
    mounted: function() {
      this.$store.dispatch('bailleurs/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'bailleurs', icon: 'mdi-lock',link:'/bailleurs',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des bailleurs',
            disabled: true,
            to: '/bailleurs',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
