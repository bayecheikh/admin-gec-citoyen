<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-categorie-faq></form-update-categorie-faq>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateCategorieFaq from '@/components/categoriesfoireauxquestions/modifier/FormUpdateCategorieFaq';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateCategorieFaq
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-roles')) {
      return redirect('/')
    }
  },
  mounted: function () {
    this.$store.dispatch('categoriesfoireauxquestions/getList')
  },
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

<style scoped></style>
