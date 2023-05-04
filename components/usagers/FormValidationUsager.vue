<template>
  <form class="text-sm-left">
    <v-row>
      <v-col md="6" lg="6" sm="12">
        <v-text-field
        label="Entrer le Code reçu par sms"
        outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn rounded
      class="mr-4 text-white" color="#1B73E8"
      @click="submitValidationUsager"
    >
      Enregistrer
    </v-btn>
  </form>
</template>

<script>
  export default {
    props: ['items'],
    data: () => ({
      selectedItem: 0,
    }),
    metaInfo () {
      return {
        items: this.items,
      }
    },
    methods: {
      submitValidationUsager() {
        this.loading = true;
        setTimeout(() => {
          this.$router.push('/usagers');
        }, 1000);
      }
    }
  }
</script>