<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-organisme></info-organisme>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-organismes></actions-organismes>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import InfoOrganisme from '@/components/organismes/detail/InfoOrganisme';
import ActionsOrganismes from '@/components/organismes/detail/ActionsOrganismes';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    InfoOrganisme,
    ActionsOrganismes
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
          text: 'Organismes',
          disabled: false,
          to: '/organismes',
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


