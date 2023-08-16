<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-faq></form-add-faq>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddFaq from '@/components/foireauxquestions/FormAddFaq';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddFaq
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-faq')) {
      return redirect('/')
    }
  },

  data() {
    return {
      headerItems: [
        {
          text: 'Foire aux questions',
          disabled: false,
          to: '/foireauxquestions',
          exact: true
        },
        {
          text: 'Nouvelle question/réponse',
          disabled: false,
          to: '/foireauxquestions/addFaq',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  