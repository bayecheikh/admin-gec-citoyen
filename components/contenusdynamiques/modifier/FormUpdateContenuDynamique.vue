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
          <v-autocomplete v-model="selected" :items="listcontenuscategories" :rules="rules.categorieRules" outlined dense
            small-chips label="Catégorie *" item-text="libelle" item-value="id" return-object @change="changeCategorie" disabled>
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

  mounted: function () {
    this.getDetail(this.$nuxt._route.params.id)
    this.$store.dispatch('contenuscategories/getList')
  },

  computed: {
    ...mapGetters({
      detailcontenudynamique: 'contenusdynamiques/detailcontenudynamique',
      listcontenuscategories: 'contenuscategories/listcontenuscategories',
      headers: 'contenuscategories/headercontenuscategories'

    }),
    isCategorieSelected() {
      return !!this.selected;
    }
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
    valid: true,
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
      categorieRules: [
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
    async getDetail(id) {
      this.progress = true
      await this.$gecApi.$get('/contenus/' + id)
        .then(async (response) => {
          this.$store.dispatch('contenusdynamiques/getDetail', response.data.data)
          this.model.id = response.data.data.id
          this.model.body = response.data.data.body
          this.model.title = response.data.data.title
          this.model.resume = response.data.data.resume
          this.model.link = response.data.data.link
          this.model.categorie = response.data.data.categorie
          this.selected = response.data.data.categorie
        }).catch((error) => {
          this.$toast.error(error?.response?.data?.message).goAway(3000)
        })
    },

    submitForm() {
      let validation = this.$refs.form.validate()
      this.loading = true;
      validation && this.$gecApi.patch('/contenus/' + this.model.id, { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Modification réussie' })
          this.$router.push('/contenusdynamiques');
        })
        .catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la modification ' })
        }).finally(() => {
          this.loading = false;
        });
    },
    
  },
  
}
</script>
    