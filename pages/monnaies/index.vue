<template>
   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-monnaie></list-monnaie>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListMonnaie from '@/components/monnaies/ListMonnaie'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-monnaies')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListMonnaie
    },
    mounted: function() {
      this.$store.dispatch('monnaies/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'monnaies', icon: 'mdi-lock',link:'/monnaies',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des monnaies',
            disabled: true,
            to: '/monnaies',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
