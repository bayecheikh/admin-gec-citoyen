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
        @click="goToAddbailleur"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouveau bailleur
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-bailleur :tab="item.value"></table-bailleur> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableBailleur from '@/components/bailleurs/TableBailleur'
  export default {
    components: {
      TableBailleur
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddbailleur() {      
        this.$router.push('/bailleurs/addbailleur');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>