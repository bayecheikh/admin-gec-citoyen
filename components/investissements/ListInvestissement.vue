<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{item.title}}</v-tab>
        </v-tabs>
      </div>
      <div class="ml-auto p-2">
        <v-btn
        depressed
        rounded
        color="primary"
        @click="goToAddinvestissement"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un financement
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-investissement :tab="item.value"></table-investissement> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableInvestissement from '@/components/investissements/TableInvestissement'
  export default {
    components: {
      TableInvestissement
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tous les investissements',value:'tout'}, {title:'Investissement à valider',value:true}
      ],
      selected: []
    }),
    methods:{
      goToAddinvestissement() {      
        this.$router.push('/investissements/addInvestissement');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>