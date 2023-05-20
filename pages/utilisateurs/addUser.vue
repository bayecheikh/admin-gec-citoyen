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
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddUser from '@/components/utilisateurs/FormAddUser';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormAddUser
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-utilisateurs')){
        return redirect('/')
      }
    },
    mounted: function() {
      /* this.$store.dispatch('roles/getList')
      this.$store.dispatch('structures/getList')
      this.$store.dispatch('fournisseurs/getList') */
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Ajouter un utilisateur', icon: 'mdi-account-plus-outline',link:'/utilisateurs/addUser',position:0 },
          { text: 'Liste des utilisateurs', icon: 'mdi-account-group',link:'/utilisateurs',position:1  }
        ],
        headerItems: [
        {
          text: 'Ajouter un utilisateur',
          disabled: false,
          to: '/utilisateurs',
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

<style scoped>

</style>
