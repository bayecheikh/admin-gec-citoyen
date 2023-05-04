<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-axe></list-axe>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListAxe from '@/components/axes/ListAxe'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-axes')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListAxe
    },
    mounted: function() {
      this.$store.dispatch('axes/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Axes', icon: 'mdi-lock',link:'/axes',position:1  },
          { text: 'axes', icon: 'mdi-lock',link:'/axes',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des axes',
            disabled: true,
            to: '/axes',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
