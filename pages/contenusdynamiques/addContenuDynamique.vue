<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-contenu-dynamique></form-add-contenu-dynamique>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddContenuDynamique from '@/components/contenusdynamiques/FormAddContenuDynamique';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddContenuDynamique
  },
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-contenus-dynamiques')) {
      return redirect('/')
    }
  },
=======
  
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260

  data() {
    return {
      headerItems: [
        {
          text: 'Contenus',
          disabled: false,
          to: '/contenusdynamiques',
          exact: true
        },
        {
          text: 'Nouveau contenu',
          disabled: false,
          to: '/contenusdynamiques/addContenuDynamique',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  