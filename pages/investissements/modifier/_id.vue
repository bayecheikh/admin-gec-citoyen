<template>
   <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <form-update-investissement></form-update-investissement>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateInvestissement from '@/components/investissements/modifier/FormUpdateInvestissement';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateInvestissement
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-investissements')){
        return redirect('/')
      }
    },
    mounted: function() {
      //this.$store.dispatch('roles/getList')
      /* this.$store.dispatch('investissements/getList')
      this.$store.dispatch('fournisseurs/getList') */
      this.$store.dispatch('annees/getList')
      this.$store.dispatch('monnaies/getList')
      this.$store.dispatch('dimensions/getList')
      this.$store.dispatch('regions/getList')
      this.$store.dispatch('structures/getSelectList')
      this.$store.dispatch('investissements/getList')
      this.$store.dispatch('modefinancements/getList')
      this.$store.dispatch('bailleurs/getList')
      this.$store.dispatch('piliers/getList')
      
    },
    data () {
      return {
        headerItems: [
        {
          text: 'Financements',
          disabled: false,
          to: '/investissements',
          exact: true
        },
        {
          text: 'Modification investissement',
          disabled: true,
          to: '/investissements/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
