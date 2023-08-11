<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{ item.title }}</v-tab>
        </v-tabs>
      </div>
      <div class="ml-auto p-2">
        <v-btn depressed rounded color="primary" @click="goToAddCategorieQR">
          <v-icon left>
            mdi-plus
          </v-icon>
          Nouvelle catégorie de question/réponse
        </v-btn>
      </div>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems" :key="item.value">
        <table-categories-foire-aux-questions :tab="item.value"></table-categories-foire-aux-questions>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import TableCategoriesFoireAuxQuestions from '@/components/categoriesfoireauxquestions/TableCategoriesFoireAuxQuestions'
export default {
  components: {
    TableCategoriesFoireAuxQuestions
  },
  data: () => ({
    tab: null,
    tabItems: [
      { title: 'Tout', value: 'tout' }
    ],
  }),
  methods: {
    goToAddCategorieQR() {
      this.$router.push('/categoriesfoireauxquestions/addCategorieFaq');
    },
  }
}
</script>
