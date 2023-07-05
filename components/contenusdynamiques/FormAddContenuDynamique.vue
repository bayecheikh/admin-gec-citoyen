<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="12" lg="12" sm="12">
          <v-text-field label="Titre *" outlined dense v-model="model.title" :rules="rules.titreRules"></v-text-field>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea label="Description" outlined dense v-model="model.resume" :rules="rules.resumeRules"></v-textarea>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-textarea label="Body *" outlined dense v-model="model.body" :rules="rules.bodyRules"></v-textarea>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-autocomplete v-model="selected" :items="listcontenuscategories" :rules="rules.categoriesRules" outlined dense
            small-chips label="Catégorie *" item-text="libelle" item-value="id" return-object @change="changeCategorie">
          </v-autocomplete>
        </v-col>
        <v-col md="12" lg="12" sm="12">
          <v-text-field label="Lien externe" outlined dense v-model="model.link" :rules="rules.lienRules"></v-text-field>
        </v-col>
      </v-row>

      <v-btn :loading="loading" :disabled="!valid || !isCategorieSelected" depressed class="mr-4 text-white"
        color="#1B73E8" @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>

    
<script>
import { mapGetters } from 'vuex'
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'
export default {
  components: {
    TiptapVuetify
  },

  computed: {
    ...mapGetters({
      listcontenuscategories: 'contenuscategories/listcontenuscategories',
      headers: 'contenuscategories/headercontenuscategories'
    }),

    isCategorieSelected() {
      return !!this.selected;
    },
  },
  mounted: function () {

    this.$store.dispatch('contenuscategories/getList')
  },

  data: () => ({
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    selected: null,
    loading: false,
    message: null,
    color: null,
    valid: true,

    message: null,
    model: {
      title: '',
      resume: '',
      body: '',
      categories: [],
      categorie: '',
      id_categorie: '',
      link: ''
    },
    rules: {
      titreRules: [
        v => !!v || 'Le titre est obligatoire',
        v => (v.length <= 50) || 'Le titre ne doit pas dépasser 50 caractères',
      ],
      resumeRules: [
        v => (v.length <= 200) || 'La description ne doit pas dépasser 200 caractères',
      ],
      bodyRules: [
        v => !!v || 'Le body est obligatoire',
        v => (v.length <= 200) || 'Le body ne doit pas dépasser 200 caractères',
      ],
      categoriesRules: [
        v => !!v || 'La catégorie est obligatoire'
      ],
      lienRules: [
        v => !v || /^(https?:\/\/|www\.)?([\w\d\-]+\.)+\w{2,}(\/[\w\d\-./?%=&]*)?$/i.test(v) || 'Le lien n\'est pas valide'
      ],

    },

  }),
  methods: {

    async changeCategorie(value) {
      this.model.categorie = value.id
    },
    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.post('/contenus/', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/contenusdynamiques');
        })
        .catch((error) => {

          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la création ' })
        }).finally(() => {
          this.loading = false;

        });
    },
  },
}
</script>
    