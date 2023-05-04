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
        @click="goToAddAxe"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouveau Axe
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-axe :tab="item.value"></table-axe> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableAxe from '@/components/axes/TableAxe'
  export default {
    components: {
      TableAxe
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddAxe() {      
        this.$router.push('/Axes/addAxe');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>