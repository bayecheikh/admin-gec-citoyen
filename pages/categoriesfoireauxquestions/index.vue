<template>
  <div>
  <div class="custom-container bg-title-grey">
    <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <list-categories-foire-aux-questions></list-categories-foire-aux-questions>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import ListCategoriesFoireAuxQuestions from '@/components/categoriesfoireauxquestions/ListCategoriesFoireAuxQuestions'
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
      ListCategoriesFoireAuxQuestions
    },
    mounted: function() {
      this.$store.dispatch('categoriesfoireauxquestions/getList')
    },
    data () {
      return {
        selectedItem: 0,
        leftmenuItems: [
          { text: 'Rôles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'categoriesfoireauxquestions', icon: 'mdi-lock',link:'/categoriesfoireauxquestions',position:2  }
        ],
        headerItems: [
          {
            text: 'Liste des catégories de question/réponse',
            disabled: true,
            to: '/categoriesfoireauxquestions',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>

</style>
