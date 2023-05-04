<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-marchepublic></list-marchepublic>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListMarchepublic from '@/components/marchepublics/ListMarchepublic'
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
      ListMarchepublic
    },
    mounted: function() {
      this.$store.dispatch('marchepublics/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'marchepublics', icon: 'mdi-lock',link:'/marchepublics',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des marchés publics',
            disabled: true,
            to: '/marchepublics',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
