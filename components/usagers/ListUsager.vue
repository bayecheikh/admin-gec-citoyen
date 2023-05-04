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
        @click="goToAddUsager"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouvel usager
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-usager :tab="item.value"></table-usager> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableUsager from '@/components/usagers/TableUsager'
  export default {
    components: {
      TableUsager
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'inactif'}, {title:'Suspendus',value:'suspendu'},
      ],
      selected: []
    }),
    methods:{
      goToAddUsager() {      
        this.$router.push('/usagers/addUsager');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>