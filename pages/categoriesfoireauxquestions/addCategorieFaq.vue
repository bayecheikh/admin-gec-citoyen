<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-categorie-faq></form-add-categorie-faq>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddCategorieFaq from '@/components/categoriesfoireauxquestions/FormAddCategorieFaq';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddCategorieFaq
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-parametres')) {
      return redirect('/')
    }
  },

  data() {
    return {
      headerItems: [
        {
          text: 'Categories Foire aux questions',
          disabled: false,
          to: '/categoriesfoireauxquestions',
          exact: true
        },
        {
          text: 'Nouvelle catégorie de question/réponse',
          disabled: false,
          to: '/categoriesfoireauxquestions/addCategorieFaq',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  