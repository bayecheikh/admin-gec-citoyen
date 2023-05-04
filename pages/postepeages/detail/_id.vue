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
              <info-postepeage></info-postepeage>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-postepeage></actions-postepeage>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoPostepeage from '@/components/postepeages/detail/InfoPostepeage';
import ActionsPostepeage from '@/components/postepeages/detail/ActionsPostepeage';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoPostepeage,
      ActionsPostepeage
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
          { text: 'postepeages', icon: 'mdi-lock',link:'/postepeages',position:2  }
        ],
        headerItems: [
        {
          text: 'Poste de peages',
          disabled: false,
          to: '/postepeages',
          exact: true
        },
        {
          text: 'Detail poste de peages',
          disabled: true,
          to: '/postepeages/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
