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
              <info-type-ligne></info-type-ligne>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-type-ligne></actions-type-ligne>
            </v-col>
          </v-row>    
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoTypeLigne from '@/components/typelignes/detail/InfoTypeLigne';
import ActionsTypeLigne from '@/components/typelignes/detail/ActionsTypeLigne';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoTypeLigne,
      ActionsTypeLigne
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-typelignes')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'typelignes', icon: 'mdi-lock',link:'/typelignes',position:2  }
        ],
        headerItems: [
        {
          text: 'typelignes',
          disabled: false,
          to: '/typelignes',
          exact: true
        },
        {
          text: 'Detail typeligne',
          disabled: true,
          to: '/typelignes/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
