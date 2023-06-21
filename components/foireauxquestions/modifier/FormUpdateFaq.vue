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
  label="Catégorie"
  item-text="name"
  item-value="id"
  return-object
  @change="changeCategorie"
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


      <v-btn :loading="loading" :disabled="!valid || !isCategorieSelected" class="mr-4 text-white" color="#1B73E8"
        @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>
    
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
  },

  mounted: function () {
    this.getDetail(this.$nuxt._route.params.id)
    this.$store.dispatch('faqcategories/getList')
  },

  computed: {
    ...mapGetters({
      detailfoireauxquestions: 'foireauxquestions/detailfoireauxquestions',
      listfaqcategories: 'faqcategories/listfaqcategories',
      headers: 'faqcategories/headerfaqcategories'

    }),
    isCategorieSelected() {
      return !!this.selected;
    }
  },
  data: () => ({
    selected: null,
    loading: false,
    message: null,
    color: null,
    valid: true,
    showCategorie: false,
    message: null,
    model: {
      question: '',
      response: '',
      id: null,
      avatar: '',
      name: '',
      firstname: '',
      lastname: '',
      email: '',
      roles: null,
      categorie_id: null,
      country_code: '+221',
      telephone: '',
      adresse: '',
      fonction: '',
      categorie_id: null
    },
    rules: {
      questionRules: [
        (v) => !!v || 'L\'intitulé de la question est obligatoire',
        (v) => (v && v.length <= 100) || "L\'intitulé de la question ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "L\'intitulé de la question doit contenir au moins 2 caractères"
      ],
      reponseRules: [
        (v) => !!v || 'La réponse est obligatoire',
        (v) => (v && v.length <= 500) || "La réponse ne doit pas dépasser 500 caractères",
        (v) => (v && v.length >= 2) || "La réponse doit contenir au moins 2 caractères"
      ],


      descriptionRules: [

        v => (!v || v.length <= 500) || 'La description ne doit pas dépasser 500 caractères',
      ],

    },


    imageData: null,
  }),
  methods: {
    async changeCategorie(value) {
      console.log("VALUEE : ++++++++++++ ", value)
      this.model.categorie = value.id


    },
    async getDetail(id) {
      this.progress = true
      await this.$gecApi.$get('/faqs/' + id)
        .then(async (response) => {
          console.log('Detail ++++++++++', response)
          this.$store.dispatch('foireauxquestions/getDetail', response.data.data)
          this.model.id = response.data.data.id
          this.model.response = response.data.data.response
          this.model.question = response.data.data.question
          this.model.description = response.data.data.description
          this.model.categorie = response.data.data.categorie
          this.selected = response.data.data.categorie
          this.model.link = response.data.data.link

        }).catch((error) => {
          this.$toast.error(error?.response?.data?.message).goAway(3000)
          console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
          console.log('Requête envoyée ')
          console.log("QUESTION", this.model.question)
        });
    },

    submitForm() {
      let validation = this.$refs.form.validate()

      this.loading = true;

      validation && this.$gecApi.patch('/faqs/' + this.model.id, { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Modification réussie' })
          this.$router.push('/foireauxquestions');
        })
        .catch((error) => {
          console.log('Code error ++++++: ', error)
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Echec de la modification ' })
        }).finally(() => {
          this.loading = false;
          console.log('Requête envoyée ')
        });
    },
    resetForm() {
      this.$refs.form.reset()
    },
    resetValidationForm() {
      this.$refs.form.resetValidation()
    },
    async changeRole() {

      let checkRole = this.model.roles.filter(item => (item && item.name === 'point_focal' || item && item.name === 'admin_structure' || item && item.name === 'DGES' || item && item.name === 'directeur_eps')).length;
      if (checkRole == 1)
        this.showFournisseur = true
      else
        this.showFournisseur = false
      console.log('************', checkRole)
    },
  },
  metaInfo() {
    return {
      items: this.items,
    }
  }
}
</script>
    