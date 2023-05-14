<template>
    <div>
    <div class="custom-container bg-title-grey">
        <page-header :items="headerItems" class=""></page-header>  
    </div> 
    <div class="custom-container mt-5">
      <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
        <form-add-organisme></form-add-organisme>
      </v-card>
    </div> 
  </div>
  </template>
  
  <script>
  import PageHeader from '@/components/PageHeader';
  import FormAddOrganisme from '@/components/organismes/FormAddOrganisme';
    export default {
      layout: "dashboard",
      components: {
        PageHeader,
        FormAddOrganisme
      },
      middleware: function ({redirect,$hasPermission}) {
        if(!$hasPermission('gerer-parametres')){
          return redirect('/')
        }
      },
   
      data () {
        return {
          headerItems: [
          {
            text: 'Organismes',
            disabled: false,
            to: '/organismes',
            exact: true
          },
          {
            text: 'Nouvel organisme',
            disabled: false,
            to: '/organismes/addOrganisme',
            exact: true
          }
          
          ]
  
        }
      }
  
    }
  </script>
  
  <style scoped>
  
  </style>
  