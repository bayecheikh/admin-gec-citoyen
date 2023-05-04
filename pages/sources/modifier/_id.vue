<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-update-source></form-update-source>
    </v-card>
  </div> 
</div>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormUpdateSource from '@/components/sources/modifier/FormUpdateSource';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormUpdateSource
    },
    mounted: function() {
      this.$store.dispatch('typesources/getList')
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
          text: 'Modification',
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
