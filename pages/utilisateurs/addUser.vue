<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-user></form-add-user>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddUser from '@/components/utilisateurs/FormAddUser';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddUser
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-utilisateurs')) {
      return redirect('/')
    }
  },
  mounted: function () {
    this.$store.dispatch('roles/getList')
   
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Nouvel utilisateur',
          disabled: false,
          to: '/utilisateurs',
          exact: true
        }

      ],
    }
  }

}
</script>


