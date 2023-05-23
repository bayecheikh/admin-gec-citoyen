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
        @click="goToAddCategorieModeleCourrier"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une catégorie de modèle courrier
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-categories-modeles-courriers :tab="item.value"></table-categories-modeles-courriers> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableCategoriesModelesCourriers from '@/components/categoriesmodelescourriers/TableCategoriesModelesCourriers'
  export default {
    components: {
      TableCategoriesModelesCourriers
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}
      ],
      selected: []
    }),
    methods:{
      goToAddCategorieModeleCourrier() {      
        this.$router.push('/categoriesmodelescourriers/addCategorieModeleCourrier');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>