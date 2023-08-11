<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-faq></form-update-faq>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateFaq from '@/components/foireauxquestions/modifier/FormUpdateFaq';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateFaq
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-roles')) {
      return redirect('/')
    }
  },
  mounted: function () {
    this.$store.dispatch('foireauxquestions/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Question/Réponse',
          disabled: false,
          to: '/foireauxquestions',
          exact: true
        },
        {
          text: 'Modifier',
          disabled: true,
          to: '/',
          exact: true
        }

      ]

    }
  }
}
</script>


