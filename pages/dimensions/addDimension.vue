<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-dimension></form-add-dimension>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddDimension from '@/components/dimensions/FormAddDimension';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddDimension
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
          text: 'Nouvelle dimension',
          disabled: false,
          to: '/dimensions/addDimension',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
