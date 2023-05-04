<template>

  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-dimension></list-dimension>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListDimension from '@/components/dimensions/ListDimension'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-dimensions')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListDimension
    },
    mounted: function() {
      this.$store.dispatch('dimensions/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'dimensions', icon: 'mdi-lock',link:'/dimensions',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des dimensions',
            disabled: true,
            to: '/dimensions',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
