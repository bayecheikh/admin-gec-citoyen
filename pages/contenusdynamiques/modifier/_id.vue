<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-contenu-dynamique></form-update-contenu-dynamique>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateContenuDynamique from '@/components/contenusdynamiques/modifier/FormUpdateContenuDynamique';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateContenuDynamique
  },
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-contenus-dynamiques')) {
      return redirect('/')
    }
  },
=======
 
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260
  mounted: function () {
    this.$store.dispatch('contenusdynamiques/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Contenu dynamique',
          disabled: false,
          to: '/contenusdynamiques',
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


