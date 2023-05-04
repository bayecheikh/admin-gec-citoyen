<template>

   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <form-update-departement></form-update-departement>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateDepartement from '@/components/departements/modifier/FormUpdateDepartement';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateDepartement
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-departements')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'departements', icon: 'mdi-lock',link:'/departements',position:2  }
        ],
        headerItems: [
        {
          text: 'Districts',
          disabled: false,
          to: '/departements',
          exact: true
        },
        {
          text: 'Modification',
          disabled: true,
          to: '/departements/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
