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
        @click="goToAddcategorie"
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une catégorie
        </v-btn>
      </div>
    </div>
    
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems"  :key="item.value" >
          <table-categorie :tab="item.value"></table-categorie> 
      </v-tab-item>          
    </v-tabs-items>
  </div>
</template>
<script>
import TableCategorie from '@/components/categories/TableCategorie'
  export default {
    components: {
      TableCategorie
    },
    data: () => ({
      tab: null,
      tabItems: [
        {title:'Tout',value:'tout'}, {title:'Actifs',value:'actif'}, {title:'Inactifs',value:'innactif'}
      ],
      selected: []
    }),
    methods:{
      goToAddcategorie() {      
        this.$router.push('/categories/addCategorie');
      },
    }
  }
</script>
<style scoped>
.border-bottom-small{
  border-bottom: solid 1px #80808052;
}
</style>