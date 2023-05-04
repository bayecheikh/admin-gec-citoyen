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
        @click="goToAddgestionrh"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une Offre
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-gestionrh :tab="item.value"></table-gestionrh> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableGestionrh from '@/components/gestionrhs/TableGestionrh'
  export default {
    components: {
      TableGestionrh
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddgestionrh() {      
        this.$router.push('/gestionrhs/addGestionrh');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>