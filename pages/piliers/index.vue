<template>
<div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-pilier></list-pilier>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListPilier from '@/components/piliers/ListPilier'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-piliers')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListPilier
    },
    mounted: function() {
      this.$store.dispatch('piliers/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Piliers', icon: 'mdi-lock',link:'/piliers',position:1  },
          { text: 'piliers', icon: 'mdi-lock',link:'/piliers',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des piliers',
            disabled: true,
            to: '/piliers',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
