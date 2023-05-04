<template>

   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <form-update-mode-financement></form-update-mode-financement>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateModeFinancement from '@/components/modefinancements/modifier/FormUpdateModeFinancement';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateModeFinancement
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-modefinancements')){
        return redirect('/')
      }
    },
    data () {
      return {
        headerItems: [
        {
          text: 'modefinancements',
          disabled: false,
          to: '/modefinancements',
          exact: true
        },
        {
          text: 'Detail modefinancement',
          disabled: true,
          to: '/modefinancements/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
