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
        @click="goToAddTypeZone"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouveau type-zone
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-type-zone :tab="item.value"></table-type-zone> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableTypeZone from '@/components/type-zones/TableTypeZone'
  export default {
    components: {
      TableTypeZone
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddTypeZone() {      
        this.$router.push('/type-zones/addTypeZone');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>