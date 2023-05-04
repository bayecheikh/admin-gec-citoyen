<template>

  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-update-typesource></form-update-typesource>   
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormUpdateTypesource from '@/components/typesources/modifier/FormUpdateTypesource';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormUpdateTypesource
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
