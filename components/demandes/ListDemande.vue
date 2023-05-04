<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{item.title}}</v-tab>
        </v-tabs>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-demande :tab="item.value"></table-demande> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableDemande from '@/components/demandes/TableDemande'
  export default {
    components: {
      TableDemande
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'},{title:'Traitées',value:'traite'}, {title:'Non traitées',value:'non_traite'}, {title:'Transférées',value:'transfere'}
      ],
      selected: []
    }),
    methods:{
      goToAddUsager() {      
        this.$router.push('/demandes/addDemande');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>