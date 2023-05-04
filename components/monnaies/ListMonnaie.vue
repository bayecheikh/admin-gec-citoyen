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
        @click="goToAddmonnaie"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouvelle monnaie
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-monnaie :tab="item.value"></table-monnaie> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableMonnaie from '@/components/monnaies/TableMonnaie'
  export default {
    components: {
      TableMonnaie
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddmonnaie() {      
        this.$router.push('/monnaies/addmonnaie');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>