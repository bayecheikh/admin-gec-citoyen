<template>
  <div>
    <v-form class="text-sm-left" v-model="valid" ref="form">
      <v-row>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Nom" outlined dense v-model="model.name" :rules="rules.nameRules"></v-text-field>
        </v-col>
        <v-col md="6" lg="6" sm="12">
          <v-text-field label="Description" outlined dense v-model="model.description"
            :rules="rules.descriptionRules"></v-text-field>
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col md="12" lg="12" sm="12" class="my-0 py-0">
          <template>
            <v-card-title class="pl-0 pr-0">
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Rechercher une permission" outlined dense
                hide-details clearable></v-text-field>
            </v-card-title>
            <v-data-table v-model="selected" :headers="headers" :items="listpermissions"
              :loading="listpermissions.length ? false : true" loading-text="Loading... Please wait"
              :single-select="singleSelect" item-key="name" show-select class="elevation-1" :search="search">
            </v-data-table>
          </template>
        </v-col>
      </v-row>
      <v-btn :loading="loading" :disabled="!valid" depressed class="mr-4 text-white mt-4" color="#1B73E8"
        @click="submitForm">
        Enregistrer
      </v-btn>
    </v-form>
    <Notification :message="message" :color="color" v-if="message" class="my-5 mb-10" />
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import { mapGetters } from 'vuex'
export default {
  components: {
    Notification
  },
  computed: mapGetters({
    listpermissions: 'permissions/listpermissions',
    headers: 'permissions/headerpermissions'
  }),
  data: () => ({
    singleSelect: false,
    color: null,
    loading: false,
    message: null,
    valid: true,
    selected: [],
    search: '',
    headers: [
      {
        text: 'Fonctionnalité',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      { text: 'Description', value: 'description' }
    ],
    model: {
      name: '',
      description: ''
    },
    rules: {
      nameRules: [
        v => !!v || 'Le nom est obligatoire',
        v => (v && v.length <= 100) || 'Le nom ne doit pas contenir plus de 100 caractères',
        v => (v && v.length >= 2) || 'Le nom doit contenir au moins 2 caractères',
      ],
      descriptionRules: [
        v => !!v || 'La description est obligatoire',
        v => (v && v.length <= 500) || 'La description ne doit pas contenir plus de 500 caractères',
        v => (v && v.length >= 2) || 'La description doit contenir au moins 2 caractères',
      ],
    },
  }),
  methods: {
    submitForm() {
      this.loading = true;
      let validation = this.$refs.form.validate()
      let selectedPermissions = this.selected.map((item) => { return item.id })
      validation && this.$gecApi.post('/roles', { ...this.model, permissions: selectedPermissions })
        .then((res) => {
          this.$store.dispatch('toast/getMessage', { type: 'success', text: res.data.message || 'Ajout réussi' })
          this.$router.push('/roles');
        })
        .catch((error) => {
          this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de l\'ajout ' })
        }).finally(() => {
          this.loading = false;
        });
    },   
  }
}
</script>