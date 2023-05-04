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
              <info-pilier></info-pilier>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-pilier></actions-pilier>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoPilier from '@/components/piliers/detail/InfoPilier';
import ActionsPilier from '@/components/piliers/detail/ActionsPilier';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoPilier,
      ActionsPilier
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-piliers')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Piliers', icon: 'mdi-lock',link:'/piliers',position:1  },
          { text: 'piliers', icon: 'mdi-lock',link:'/piliers',position:2  }
        ],
        headerItems: [
        {
          text: 'Piliers',
          disabled: false,
          to: '/piliers',
          exact: true
        },
        {
          text: 'Detail pilier',
          disabled: true,
          to: '/piliers/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
