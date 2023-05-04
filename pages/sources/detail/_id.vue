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
              <info-source></info-source>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-source></actions-source>
            </v-col>
          </v-row> 
    </v-card>
  </div> 
</div>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoSource from '@/components/sources/detail/InfoSource';
import ActionsSource from '@/components/sources/detail/ActionsSource';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      Infosource,
      Actionssource
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-source-financement')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'sources',
          disabled: false,
          to: '/sources',
          exact: true
        },
        {
          text: 'Detail source',
          disabled: true,
          to: '/sources/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
