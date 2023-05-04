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
        @click="goToAddmodefinancement"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouvel mode de financement
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-mode-financement :tab="item.value"></table-mode-financement> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableModeFinancement from '@/components/modefinancements/TableModeFinancement'
  export default {
    components: {
      TableModeFinancement
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddmodefinancement() {      
        this.$router.push('/modefinancements/addModeFinancement');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>