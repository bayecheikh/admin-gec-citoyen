<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-modele-courrier></form-add-modele-courrier>
      </v-card>
    </div>
  </div>
</template>
  
<script>
import PageHeader from '@/components/PageHeader';
import FormAddModeleCourrier from '@/components/modelescourriers/FormAddModeleCourrier';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddModeleCourrier
  },
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-modeles-courriers')) {
      return redirect('/')
    }
  },
=======
  
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260

  data() {
    return {
      headerItems: [
        {
          text: 'Modèles de courrier',
          disabled: false,
          to: '/modelescourriers',
          exact: true
        },
        {
          text: 'Nouveau modèle de courrier',
          disabled: false,
          to: '/modelescourriers/addModeleCourrier',
          exact: true
        }

      ]

    }
  }

}
</script>
  

  