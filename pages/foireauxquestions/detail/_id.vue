<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-faq></info-faq>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-faq></actions-faq>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import InfoFaq from '@/components/foireauxquestions/detail/InfoFAQ';
import ActionsFaq from '@/components/foireauxquestions/detail/ActionsFAQ';
export default {
  layout: "dashboard",
  components: {
    
    PageHeader,
    InfoFaq,
    ActionsFaq
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
          text: 'Question/Réponse',
          disabled: false,
          to: '/foireauxquestions',
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


