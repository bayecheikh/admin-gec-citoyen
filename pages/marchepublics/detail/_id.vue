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
              <info-marchepublic></info-marchepublic>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-marchepublic></actions-marchepublic>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoMarchepublic from '@/components/marchepublics/detail/InfoMarchepublic';
import ActionsMarchepublic from '@/components/marchepublics/detail/ActionsMarchepublic';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoMarchepublic,
      ActionsMarchepublic
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
          { text: 'marchepublics', icon: 'mdi-lock',link:'/marchepublics',position:2  }
        ],
        headerItems: [
        {
          text: 'Marchés publics',
          disabled: false,
          to: '/marchepublics',
          exact: true
        },
        {
          text: 'Detail marché public',
          disabled: true,
          to: '/marchepublics/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
