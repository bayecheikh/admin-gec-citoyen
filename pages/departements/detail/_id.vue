<template>
 <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
    <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-departement></info-departement>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-departement></actions-departement>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoDepartement from '@/components/departements/detail/InfoDepartement';
import ActionsDepartement from '@/components/departements/detail/ActionsDepartement';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoDepartement,
      ActionsDepartement
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
          { text: 'Departements', icon: 'mdi-lock',link:'/departements',position:2  }
        ],
        headerItems: [
        {
          text: 'Districts',
          disabled: false,
          to: '/departements',
          exact: true
        },
        {
          text: 'Detail district',
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
