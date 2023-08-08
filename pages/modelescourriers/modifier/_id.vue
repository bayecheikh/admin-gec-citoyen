<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-modele-courrier></form-update-modele-courrier>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateModeleCourrier from '@/components/modelescourriers/modifier/FormUpdateModeleCourrier';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateModeleCourrier
  },
 
  mounted: function () {
    this.$store.dispatch('modelescourriers/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Modèle Courrier',
          disabled: false,
          to: '/modelescourriers',
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


