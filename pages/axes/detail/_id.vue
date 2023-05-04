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
              <info-axe></info-axe>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-axe></actions-axe>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoAxe from '@/components/axes/detail/InfoAxe';
import ActionsAxe from '@/components/axes/detail/ActionsAxe';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoAxe,
      ActionsAxe
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-axes')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Axes', icon: 'mdi-lock',link:'/axes',position:1  },
          { text: 'axes', icon: 'mdi-lock',link:'/axes',position:2  }
        ],
        headerItems: [
        {
          text: 'axes',
          disabled: false,
          to: '/axes',
          exact: true
        },
        {
          text: 'Detail axe',
          disabled: true,
          to: '/axes/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
