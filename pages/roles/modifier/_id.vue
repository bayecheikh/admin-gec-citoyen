<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-role></form-update-role>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import FormUpdateRole from '@/components/roles/modifier/FormUpdateRole';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdateRole
  },
  mounted: function () {
    this.$store.dispatch('permissions/getList')
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-roles')) {
      return redirect('/')
    }
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Rôle',
          disabled: false,
          to: '/roles',
          exact: true
        },
        {
          text: 'Modifier',
          disabled: true,
          to: '/roles/addRole',
          exact: true
        }

      ],
     
    }
  }

}
</script>


