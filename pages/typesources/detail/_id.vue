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
              <info-typesource></info-typesource>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-typesource></actions-typesource>
            </v-col>
          </v-row>     
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import InfoTypesource from '@/components/typesources/detail/InfoTypesource';
import ActionsTypesource from '@/components/typesources/detail/ActionsTypesource';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      InfoTypesource,
      ActionsTypesource
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-type-sources')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Type sources',
          disabled: false,
          to: '/typesources',
          exact: true
        },
        {
          text: 'Detail type source',
          disabled: true,
          to: '/typesources/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
