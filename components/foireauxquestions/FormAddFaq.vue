<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-textarea label="Question" outlined dense v-model="model.question" :rules="rules.questionRules"></v-textarea>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-textarea label="Réponse" outlined dense v-model="model.response" :rules="rules.reponseRules"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-textarea label="Description" outlined dense v-model="model.description"
            :rules="rules.descriptionRules"></v-textarea>
        </v-col>

      </v-row>
      <v-row>
        <!-- <v-col md="6" lg="6" sm="12">
        <v-autocomplete
  v-model="selected"
  :items="listfaqcategories"
  outlined
  dense
  small-chips
  label="Categorie"
  item-text="name"
  item-value="id"
  return-object
  @change="changeCategorie"
  :rules="[v => !!v || 'La catégorie est obligatoire.']"
>
  <template v-slot:item="{ item }">
    <div>{{ item.name }}</div>
  </template>
</v-autocomplete>

     
  </v-col> -->
        <!-- <v-col md="6" lg="6" sm="12">
    
    <v-text-field
      label="Lien"
      outlined dense
      v-model="model.link"
      :rules="rules.linkRules"
    ></v-text-field>
  </v-col> -->
      </v-row>


      <v-btn :loading="loading" :disabled="!valid" class="mr-4 text-white" color="#1B73E8" @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>
    
<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters({
      listfaqcategories: 'faqcategories/listfaqcategories',
      headers: 'faqcategories/headerfaqcategories'
    }),

    isCategorieSelected() {
      return !!this.selected;
    },
  },
  mounted: function () {

    this.$store.dispatch('faqcategories/getList')
  },

  data: () => ({

    selected: null,
    loading: false,
    message: null,
    valid: true,
    model: {
      question: '',
      response: '',
      description: '',
      categorie: '',
      link: '',
      id: null,
    },
    rules: {
      questionRules: [
        (v) => !!v || 'L\'intitulé de la question est obligatoire.',
        (v) => (v && v.length <= 100) || "L\'intitulé de la question ne doit pas dépasser 100 caractères.",
        (v) => (v && v.length >= 2) || "L\'intitulé de la question doit contenir au moins 2 caractères."
      ],
      reponseRules: [
        (v) => !!v || 'La réponse est obligatoire.',
        (v) => (v && v.length <= 500) || "La réponse ne doit pas dépasser 500 caractères.",
        (v) => (v && v.length >= 2) || "La réponse doit contenir au moins 2 caractères."
      ],
      descriptionRules: [
        v => (!v || v.length < 500) || 'La description doit être inférieure à 500 caractères.',
      ],

    },
  }),
  methods: {

    async changeCategorie(value) {
      this.model.categorie = value.id
    },
    async submitForm() {
      const categorieInfosGenerales = await this.listfaqcategories.find(item => item.slug == "infos-generales")
      this.model.categorie = categorieInfosGenerales.id
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.post('/faqs/', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/foireauxquestions');
        })
        .catch((error) => {
          if (error.response && error.response?.status === 500 && error.response?.data && error.response?.data?.message.includes('duplicate key error')) {
            error = 'Cette question existe déjà.';
          }
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la création' });

        }).finally(() => {
          this.loading = false;
          
        });
    },
  },
  
}
</script>
    