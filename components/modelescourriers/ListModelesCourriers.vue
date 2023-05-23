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
        @click="goToAddModeleCourrier"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un modèle de courrier
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-modeles-courriers :tab="item.value"></table-modeles-courriers> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableModelesCourriers from '@/components/modelescourriers/TableModelesCourriers'
  export default {
    components: {
      TableModelesCourriers
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}
      ],
      selected: []
    }),
    methods:{
      goToAddModeleCourrier() {      
        this.$router.push('/modelescourriers/addModeleCourrier');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>