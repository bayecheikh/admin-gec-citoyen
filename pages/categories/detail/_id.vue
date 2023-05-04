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
              <info-categorie></info-categorie>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-categorie></actions-categorie>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoCategorie from '@/components/categories/detail/InfoCategorie';
import ActionsCategorie from '@/components/categories/detail/ActionsCategorie';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoCategorie,
      ActionsCategorie
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'categories', icon: 'mdi-lock',link:'/categories',position:2  }
        ],
        headerItems: [
        {
          text: 'Categories',
          disabled: false,
          to: '/categories',
          exact: true
        },
        {
          text: 'Detail categorie',
          disabled: true,
          to: '/categories/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
