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
import LeftMenu from '@/components/LeftMenu';
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
    LeftMenu,
    PageHeader,
    ListModelesCourriers
  },
  mounted: function () {
    this.$store.dispatch('modelescourriers/getList')
  },
  data() {
    return {
      selectedItem: 0,
      leftmenuItems: [
        { text: 'Rôles', icon: 'mdi-lock', link: '/roles', position: 1 },
        { text: 'Modèles de courrier', icon: 'mdi-lock', link: '/modelescourriers', position: 2 }
      ],
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

<style scoped></style>
