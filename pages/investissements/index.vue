<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <table-investissement></table-investissement>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import TableInvestissement from '@/components/investissements/TableInvestissement'
import { mapActions} from 'vuex'
  export default {
    layout: "dashboard",
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-investissements')){
        return redirect('/')
      }
    },
    components: {
      PageHeader,
      TableInvestissement
    },
    mounted: function() {
      /* this.$store.dispatch('roles/getList')
      this.$store.dispatch('investissements/getList')
      this.$store.dispatch('fournisseurs/getList') */
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Liste des financements',
            disabled: true,
            to: '/investissements',
            exact: true
          }
        ]
      }
    }

  }
</script>

<style scoped>
.bg-title {
  background-color: rgb(227, 235, 243) !important;
  color: #6F96AA;
}
</style>
