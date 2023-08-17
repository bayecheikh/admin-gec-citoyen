<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-organisme></form-update-organisme>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateOrganisme from '@/components/organismes/modifier/FormUpdateOrganisme';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateOrganisme
  },
<<<<<<< HEAD
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-organismes')) {
      return redirect('/')
    }
  },
=======
 
>>>>>>> 7ab479bfe2380ac396b36d3f49966d207aa94260
  mounted: function () {
    this.$store.dispatch('organismes/getList')
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Organisme',
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


