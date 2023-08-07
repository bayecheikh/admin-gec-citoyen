<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container" flat>
        <list-contenus-dynamiques></list-contenus-dynamiques>
      </v-card>
    </div>
  </div>
</template>
<script>

import PageHeader from '@/components/PageHeader';
import ListContenusDynamiques from '@/components/contenusdynamiques/ListContenusDynamiques'
export default {
  layout: "dashboard",
  
  components: {
    PageHeader,
    ListContenusDynamiques
  },
  mounted: function () {
    this.$store.dispatch('contenusdynamiques/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Liste des contenus',
          disabled: true,
          to: '/contenusdynamiques',
          exact: true
        }
      ]
    }
  }

}
</script>


