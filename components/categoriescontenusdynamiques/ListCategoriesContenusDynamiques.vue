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
        @click="goToAddCategorieContenuDynamique"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une catégorie de contenu
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-categories-contenus-dynamiques :tab="item.value"></table-categories-contenus-dynamiques> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableCategoriesContenusDynamiques from '@/components/categoriescontenusdynamiques/TableCategoriesContenusDynamiques'
  export default {
    components: {
      TableCategoriesContenusDynamiques
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}
      ],
      selected: []
    }),
    methods:{
      goToAddCategorieContenuDynamique() {      
        this.$router.push('/categoriescontenusdynamiques/addCategorieContenuDynamique');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>