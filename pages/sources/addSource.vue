<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-source></form-add-source>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddSource from '@/components/sources/FormAddSource';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormAddSource
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-source-financement')){
        return redirect('/')
      }
    },
    mounted: function() {
      this.$store.dispatch('typesources/getList')
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Sources',
          disabled: false,
          to: '/sources',
          exact: true
        },
        {
          text: 'Nouvelle source',
          disabled: false,
          to: '/sources/addSource',
          exact: true
        }
        
        ]

      }
    }
  }
</script>

<style scoped>

</style>
