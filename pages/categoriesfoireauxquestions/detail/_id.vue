<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-categorie-faq></info-categorie-faq>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-categories-faq></actions-categories-faq>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import InfoCategorieFaq from '@/components/categoriesfoireauxquestions/detail/InfoCategorieFAQ';
import ActionsCategoriesFaq from '@/components/categoriesfoireauxquestions/detail/ActionsCategoriesFAQ';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    InfoCategorieFaq,
    ActionsCategoriesFaq
  },
  // middleware: function ({redirect,$hasPermission}) {
  //   if(!$hasPermission('gerer-utilisateurs')){
  //     return redirect('/')
  //   }
  // },
  data() {
    return {
      headerItems: [
        {
          text: 'Catégorie de Question/Réponse',
          disabled: false,
          to: '/categoriesfoireauxquestions',
          exact: true
        },
        {
          text: 'Détail',
          disabled: true,
          to: '/',
          exact: true
        }
      ]
    }
  }

}
</script>


