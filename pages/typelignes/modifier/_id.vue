<template>
  
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <form-update-type-ligne></form-update-type-ligne>  
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateTypeLigne from '@/components/typelignes/modifier/FormUpdateTypeLigne';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateTypeLigne
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-typelignes')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'typelignes',
          disabled: false,
          to: '/typelignes',
          exact: true
        },
        {
          text: 'Detail type ligne',
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
