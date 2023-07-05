<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-add-permission></form-add-permission>
      </v-card>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddPermission from '@/components/permissions/FormAddPermission';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormAddPermission
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-permissions')) {
      return redirect('/')
    }
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Permissions',
          disabled: false,
          to: '/permissions',
          exact: true
        },
        {
          text: 'Nouvelle permission',
          disabled: false,
          to: '/permissions/addPermission',
          exact: true
        }

      ],

    }
  }

}
</script>


