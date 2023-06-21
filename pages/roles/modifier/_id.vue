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
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormUpdateRole from '@/components/roles/modifier/FormUpdateRole';
export default {
  layout: "dashboard",
  components: {
    LeftMenu,
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
      leftmenuItems: [
        { text: 'Roles', icon: 'mdi-lock', link: '/roles', position: 1 },
        { text: 'Permissions', icon: 'mdi-lock', link: '/permissions', position: 2 }
      ],
      headerItems: [
        {
          text: 'Role',
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
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      menu3: false,
      modal: false,


    }
  }

}
</script>

<style scoped></style>
