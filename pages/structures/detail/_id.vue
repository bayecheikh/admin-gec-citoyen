<template>
<div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <info-structure></info-structure>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-structure></actions-structure>
            </v-col>
          </v-row>  
    </v-card>
    <v-card flat class="mx-auto my-6">  
      <v-container pl-10 pt-10 pb-10 pr-10>
          <v-row align="center"
            justify="center">
            <v-col cols="12" md="12" lg="12" sm="12">
              <historique-structure></historique-structure>
            </v-col>
          </v-row>
      </v-container>        
    </v-card>
  </div> 
</div>
  
</template>

<script>
import PageHeader from '@/components/PageHeader';
import InfoStructure from '@/components/structures/detail/InfoStructure';
import ActionsStructure from '@/components/structures/detail/ActionsStructure';
import HistoriqueStructure from '@/components/structures/detail/HistoriqueStructure';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      InfoStructure,
      ActionsStructure,
      HistoriqueStructure,
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-structures')){
        return redirect('/')
      }
    },
    data () {
      return {
        id : this.$nuxt._route.params.id,
        headerItems: [
        {
          text: 'Structures',
          disabled: false,
          to: '/structures',
          exact: true
        },
        {
          text: 'Detail structure',
          disabled: true,
          to: '/structures/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
