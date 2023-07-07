<template>
  <div>
    <div class="d-flex border-bottom-solid">
      <div>
        <v-tabs v-model="tab">
          <v-tab class="text-normal" v-for="item in tabItems" :key="item.value"> {{ item.title }}</v-tab>
        </v-tabs>
      </div>
      <div class="ml-auto p-2">
        <v-btn depressed rounded color="primary" @click="goToAddQR">
          <v-icon left>
            mdi-plus
          </v-icon>
          Ajouter une question/réponse
        </v-btn>
      </div>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabItems" :key="item.value">
        <table-foire-aux-questions :tab="item.value"></table-foire-aux-questions>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import TableFoireAuxQuestions from '@/components/foireauxquestions/TableFoireAuxQuestions'
export default {
  components: {
    TableFoireAuxQuestions
  },
  data: () => ({
    tab: null,
    tabItems: [
      { title: 'Tout', value: 'tout' }
    ],
  }),
  methods: {
    goToAddQR() {
      this.$router.push('/foireauxquestions/addFaq');
    },
  }
}
</script>
