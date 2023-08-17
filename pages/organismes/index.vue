<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container" flat>
        <list-organismes></list-organismes>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import ListOrganismes from '@/components/organismes/ListOrganismes'
export default {
  layout: "dashboard",
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-organismes')) {
      return redirect('/')
    }
  },
=======
  
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260
  components: {
    PageHeader,
    ListOrganismes
  },
  mounted: function () {
    this.$store.dispatch('organismes/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Liste des organismes',
          disabled: true,
          to: '/organismes',
          exact: true
        }
      ]
    }
  }

}
</script>


