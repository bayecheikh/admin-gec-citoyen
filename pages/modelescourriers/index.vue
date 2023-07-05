<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container" flat>
        <list-modeles-courriers></list-modeles-courriers>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import ListModelesCourriers from '@/components/modelescourriers/ListModelesCourriers'
export default {
  layout: "dashboard",
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-parametres')) {
      return redirect('/')
    }
  },
  components: {
    PageHeader,
    ListModelesCourriers
  },
  mounted: function () {
    this.$store.dispatch('modelescourriers/getList')
  },
  data() {
    return { 
      headerItems: [
        {
          text: 'Liste des modèles de courrier',
          disabled: true,
          to: '/modelescourriers',
          exact: true
        }
      ]
    }
  }

}
</script>


