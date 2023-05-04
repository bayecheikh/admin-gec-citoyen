<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-departement></form-add-departement>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddDepartement from '@/components/departements/FormAddDepartement';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddDepartement
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
          { text: 'Districts', icon: 'mdi-lock',link:'/departements',position:2  }
        ],
        headerItems: [
        {
          text: 'Districts',
          disabled: false,
          to: '/departements',
          exact: true
        },
        {
          text: 'Nouveau district',
          disabled:true,
          to: '/departements/addDepartement',
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
        departements: ['Sperviseur national'],
        localisations: ['Thiès','Dakar'],

      }
    }

  }
</script>

<style scoped>

</style>
