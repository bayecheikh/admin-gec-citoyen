<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-postepeage></form-add-postepeage>
    </v-card>
  </div> 
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
import FormAddPostepeage from '@/components/postepeages/FormAddPostepeage';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader,
      FormAddPostepeage
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-parametres')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'postepeages', icon: 'mdi-lock',link:'/postepeages',position:2  }
        ],
        headerItems: [
        {
          text: 'Poste de peages',
          disabled: false,
          to: '/postepeages',
          exact: true
        },
        {
          text: 'Nouveau poste de peage',
          disabled: true,
          to: '/postepeages/addPostepeage',
          exact: true
        }
        
        ],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
        menu3: false,
        modal: false,
        postepeages: ['Sperviseur national'],
        localisations: ['Thiès','Dakar'],

      }
    }

  }
</script>

<style scoped>

</style>
