<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-permission></form-update-permission>
      </v-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdatePermission from '@/components/permissions/modifier/FormUpdatePermission';
export default {
  layout: "dashboard",
  components: {
    PageHeader,
    FormUpdatePermission
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
          text: 'Permission',
          disabled: false,
          to: '/permissions',
          exact: true
        },
        {
          text: 'Modifier permission',
          disabled: true,
          to: '/permissions/94',
          exact: true
        }

      ],
    }
  }

}
</script>


