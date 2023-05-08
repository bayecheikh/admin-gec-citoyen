<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-foire-aux-questions></list-foire-aux-questions>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListFoireAuxQuestions from '@/components/foireauxquestions/ListFoireAuxQuestions'
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
      ListFoireAuxQuestions
    },
    mounted: function() {
      this.$store.dispatch('foireauxquestions/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'foireauxquestions', icon: 'mdi-lock',link:'/foireauxquestions',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des questions',
            disabled: true,
            to: '/foireauxquestions',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
