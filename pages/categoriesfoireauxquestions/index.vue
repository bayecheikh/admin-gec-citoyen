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

import PageHeader from '@/components/PageHeader';
import ListCategoriesFoireAuxQuestions from '@/components/categoriesfoireauxquestions/ListCategoriesFoireAuxQuestions'
export default {
  layout: "dashboard",
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-parametres')) {
      return redirect('/')
    }
  },
  components: {
    
    PageHeader,
    ListCategoriesFoireAuxQuestions
  },
  mounted: function () {
    this.$store.dispatch('categoriesfoireauxquestions/getList')
  },
  data() {
    return {
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


