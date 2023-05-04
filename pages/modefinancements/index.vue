<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-mode-financement></list-mode-financement>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListModeFinancement from '@/components/modefinancements/ListModeFinancement'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-modefinancements')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListModeFinancement
    },
    mounted: function() {
      this.$store.dispatch('modefinancements/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'modefinancements', icon: 'mdi-lock',link:'/modefinancements',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des modefinancements',
            disabled: true,
            to: '/modefinancements',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
