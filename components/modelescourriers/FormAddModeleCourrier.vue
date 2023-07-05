<template>
  <div>
    <v-form class="text-sm-center" v-model="valid" ref="form" enctype="multipart/form-data">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Nom du modèle" outlined dense v-model="model.name" :rules="rules.nameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Objet" outlined dense v-model="model.objet" :rules="rules.objetRules"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-textarea label="Message" outlined dense v-model="model.message" :rules="rules.messageRules"></v-textarea>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-autocomplete v-model="selected" :items="listmodelescourrierscategories" outlined dense small-chips
            label="Type du modèle de courrier" item-text="name" item-value="id" return-object @change="changeCategorie">
            <template v-slot:item="{ item }">
              <div>{{ item.name }}</div>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>


      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Description" outlined dense v-model="model.description"
            :rules="rules.descriptionRules"></v-text-field>
        </v-col>

      </v-row>
      <v-btn :loading="loading" :disabled="!valid || !isCategorieSelected" class="mr-4 text-white" color="#1B73E8"
        @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>
    
<script>
import { mapGetters } from 'vuex'
export default {
  mounted: function () {
    this.$store.dispatch('modelescourrierscategories/getList')
  },
  computed: {
    ...mapGetters({
      listmodelescourrierscategories: 'modelescourrierscategories/listmodelescourrierscategories',
      detailmodelecourrier: 'modelescourriers/detailmodelecourrier',

      headers: 'modelescourrierscategories/headermodelescourrierscategories'

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
    message: null,
    model: {
      name: '',
      objet: '',
      message: null,
      categorie: '',
      description: '',
      categorie_id: null
    },
    rules: {
      nameRules: [
        (v) => !!v || 'Le nom du modèle est obligatoire',
        (v) => (v && v.length <= 100) || "Le nom du modèle ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "Le nom du modèle doit contenir au moins 2 caractères"
      ],
      objetRules: [
        (v) => !!v || 'L\'objet est obligatoire',
        (v) => (v && v.length <= 100) || "L'objet ne doit pas dépasser 100 caractères",
        (v) => (v && v.length >= 2) || "L'objet doit contenir au moins 2 caractères"
      ],
      messageRules: [
        (v) => !!v || 'Le corps du message est obligatoire',
        (v) => (v && v.length >= 2) || "Le message doit contenir au moins 2 caractères"
      ],

      descriptionRules: [

        (v) => (v.length <= 500) || "La description du modèle de courrier ne doit pas dépasser 100 caractères",

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
      validation && this.$gecApi.post('/model-courriers/', { ...this.model })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/modelescourriers');
        })
        .catch((error) => {
          
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de l\'ajout ' })
        }).finally(() => {
          this.loading = false;
        });
    },
  },
  
}
</script>
    