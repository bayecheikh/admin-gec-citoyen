<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-typesource></form-add-typesource>    
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddTypesource from '@/components/typesources/FormAddTypesource';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormAddTypesource
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
            text: 'Nouveau type source',
            disabled: false,
            to: '/typesources/addTypesource',
            exact: true
          }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
