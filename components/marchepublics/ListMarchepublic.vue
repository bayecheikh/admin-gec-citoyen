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
        @click="goToAddmarchepublic"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un marchepublic
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-marchepublic :tab="item.value"></table-marchepublic> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableMarchepublic from '@/components/marchepublics/TableMarchepublic'
  export default {
    components: {
      TableMarchepublic
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddmarchepublic() {      
        this.$router.push('/marchepublics/addMarchepublic');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>