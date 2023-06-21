<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-role></info-role>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-role></actions-role>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoRole from '@/components/roles/detail/InfoRole';
import ActionsRole from '@/components/roles/detail/ActionsRole';
export default {
  layout: "dashboard",
  components: {
    LeftMenu,
    PageHeader,
    InfoRole,
    ActionsRole
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
          text: 'Roles',
          disabled: false,
          to: '/roles',
          exact: true
        },
        {
          text: 'Détail Role',
          disabled: true,
          to: '/roles/94',
          exact: true
        }

      ]

    }
  }

}
</script>

<style scoped></style>
