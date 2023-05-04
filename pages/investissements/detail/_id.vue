<template>
  
 <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
     <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12" class="my-5">
              <actions-investissement></actions-investissement>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-investissement></info-investissement>
            </v-col>
            
          </v-row>
    </v-card>
  </div> 
</div> 
</template>

<script>
import PageHeader from '@/components/PageHeader';
import InfoInvestissement from '@/components/investissements/detail/InfoInvestissement';
import ActionsInvestissement from '@/components/investissements/detail/ActionsInvestissement';
import HistoriqueInvestissement from '@/components/investissements/detail/HistoriqueInvestissement';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      InfoInvestissement,
      ActionsInvestissement,
      HistoriqueInvestissement,
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
      this.$store.dispatch('sources/getList')
      
    },
    data () {
      return {
        id : this.$nuxt._route.params.id,
        headerItems: [
        {
          text: 'Financements',
          disabled: false,
          to: '/investissements',
          exact: true
        },
        {
          text: 'Detail investissement',
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
