<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{ item.title }}</v-tab>
        </v-tabs>
      </div>
      <div class="ml-auto p-2">
        <v-btn depressed rounded color="primary" @click="goToAddCategorieOrganisme">
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter un type d'organisme
        </v-btn>
      </div>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems" :key="item.value">
        <table-categories-organismes :tab="item.value"></table-categories-organismes>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import TableCategoriesOrganismes from '@/components/categoriesorganismes/TableCategoriesOrganismes'
export default {
  components: {
    TableCategoriesOrganismes
  },
  data: () => ({
    tab: null,
    tabItems: [
      { title: 'Tout', value: 'tout' }
    ],
    selected: []
  }),
  methods: {
    goToAddCategorieOrganisme() {
      this.$router.push('/categoriesorganismes/addCategorieOrganisme');
    },
  }
}
</script>
<style scoped>
.border-bottom-small {
  border-bottom: solid 1px #80808052;
}
</style>