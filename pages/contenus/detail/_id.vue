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
              <info-contenu></info-contenu>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-contenu></actions-contenu>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoContenu from '@/components/contenus/detail/InfoContenu';
import ActionsContenu from '@/components/contenus/detail/ActionsContenu';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoContenu,
      ActionsContenu
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
          { text: 'contenus', icon: 'mdi-lock',link:'/contenus',position:2  }
        ],
        headerItems: [
        {
          text: 'contenus',
          disabled: false,
          to: '/contenus',
          exact: true
        },
        {
          text: 'Detail contenu',
          disabled: true,
          to: '/contenus/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
