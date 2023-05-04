<template>

  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <form-update-dimension></form-update-dimension>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateDimension from '@/components/dimensions/modifier/FormUpdateDimension';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateDimension
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-dimensions')){
        return redirect('/')
      }
    },
    mounted: function() {
      this.$store.dispatch('modefinancements/getList')
    },
    data () {
      return {
        headerItems: [
        {
          text: 'dimensions',
          disabled: false,
          to: '/dimensions',
          exact: true
        },
        {
          text: 'Detail dimension',
          disabled: true,
          to: '/dimensions/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
