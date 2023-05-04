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
        @click="goToAddAnnee"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouvelle annee
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-annee :tab="item.value"></table-annee> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableAnnee from '@/components/annees/TableAnnee'
  export default {
    components: {
      TableAnnee
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddAnnee() {      
        this.$router.push('/annees/addAnnee');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>