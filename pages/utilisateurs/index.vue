<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container" flat>
        <list-user></list-user>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import ListUser from '@/components/utilisateurs/ListUser'
export default {
  layout: "dashboard",
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-utilisateurs')) {
      return redirect('/')
    }
  },

  components: {
    PageHeader,
    ListUser
  },
  mounted: function () {
    /* this.$store.dispatch('utilisateurs/getList',1) */
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Liste des utilisateurs',
          disabled: true,
          to: '/utilisateurs',
          exact: true
        }
      ]
    }
  }

}
</script>

<style scoped>
.bg-title-grey {
  background-color: #0a3764 !important;
  /* background-color: rgb(7, 127, 147) !important; */
  color: #6F96AA;
}

.custom-container {
  padding-left: 3%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 3%;
}
</style>
