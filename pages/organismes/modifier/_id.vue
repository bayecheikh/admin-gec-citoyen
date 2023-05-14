<template>

  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <form-update-organisme></form-update-organisme>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateOrganisme from '@/components/organismes/modifier/FormUpdateOrganisme';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateOrganisme
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-roles')){
        return redirect('/')
      }
    },
    mounted: function() {
      this.$store.dispatch('organismes/getList')
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Organisme',
          disabled: false,
          to: '/dimensions',
          exact: true
        },
        {
          text: 'Détail',
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
