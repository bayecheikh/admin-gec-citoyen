<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-departement></list-departement>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListDepartement from '@/components/departements/ListDepartement'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-departements')){
        return redirect('/')
      }
    },
    components: {
      LeftMenu,
      PageHeader,
      ListDepartement
    },
    mounted: function() {
      this.$store.dispatch('departements/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'departements', icon: 'mdi-lock',link:'/departements',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des districts',
            disabled: true,
            to: '/departements',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
