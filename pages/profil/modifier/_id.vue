<template>
  <div>
    <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>
    </div>
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>
        <form-update-user></form-update-user>
      </v-card>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader';
import FormUpdateUser from '@/components/profil/modifier/FormUpdateUser';
export default {
  layout: "dashboard",
  components: {
    
    PageHeader,
    FormUpdateUser
  },
  middleware: function ({ redirect, $hasPermission, $getUser }) {
    /*  if($nuxt._route.params.id!=$getUser.id){
       return redirect('/')
     } */
  },
  mounted: function () {
    this.$store.dispatch('roles/getList')
    /* this.$store.dispatch('structures/getList')
    this.$store.dispatch('fournisseurs/getList') */
  },
  data() {
    return {
      headerItems: [
        {
          text: 'Modification profil',
          disabled: true,
          to: '/utilisateurs/94',
          exact: true
        }

      ],
    }
  }

}
</script>


