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
        @click="goToAddTypesource"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouveau  type de source
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-typesource :tab="item.value"></table-typesource> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableTypesource from '@/components/typesources/TableTypesource'
  export default {
    components: {
      TableTypesource
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddTypesource() {      
        this.$router.push('/typesources/addTypesource');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>