<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <v-row align="center" justify="center">
          <v-col cols="12" md="12" lg="12" sm="12">
            <info-permission></info-permission>
          </v-col>
          <v-col cols="12" md="12" lg="12" sm="12">
            <actions-permission></actions-permission>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoPermission from '@/components/permissions/detail/InfoPermission';
import ActionsPermission from '@/components/permissions/detail/ActionsPermission';
export default {
  layout: "dashboard",
  components: {
    LeftMenu,
    PageHeader,
    InfoPermission,
    ActionsPermission
  },
  middleware: function ({ redirect, $hasPermission }) {
    if (!$hasPermission('gerer-permissions')) {
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
          text: 'Permissions',
          disabled: false,
          to: '/permissions',
          exact: true
        },
        {
          text: 'Détail permission',
          disabled: true,
          to: '/permissions/94',
          exact: true
        }

      ]

    }
  }

}
</script>

<style scoped></style>
