<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container" flat>  
      <table-traitement></table-traitement>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import TableTraitement from '@/components/investissements/TableTraitement'
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
      TableTraitement
    },
    mounted: function() {     
      this.$store.dispatch('annees/getList')
      this.$store.dispatch('monnaies/getList')
      this.$store.dispatch('dimensions/getList')
      this.$store.dispatch('regions/getList')
      this.$store.dispatch('structures/getList')
      this.$store.dispatch('bailleurs/getList')
      this.$store.dispatch('piliers/getList')    
      this.$store.dispatch('sources/getList') 
      this.$store.dispatch('structures/getSelectList')   
      this.$store.dispatch('axes/getList')   
      this.listPiliers=this.listpiliers
      this.listBailleurs=this.listbailleurs
    },
    data () {
      return {
        selectedItem: 0,
        headerItems: [
          {
            text: 'Traitement de données',
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
