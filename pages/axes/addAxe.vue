<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
    <v-card class="container pl-10 pt-10 pb-10 pr-10" flat>  
      <form-add-axe></form-add-axe>
    </v-card>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormAddAxe from '@/components/axes/FormAddAxe';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormAddAxe
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-axes')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Axes', icon: 'mdi-lock',link:'/axes',position:1  },
          { text: 'axes', icon: 'mdi-lock',link:'/axes',position:2  }
        ],
        headerItems: [
        {
          text: 'axes',
          disabled: false,
          to: '/axes',
          exact: true
        },
        {
          text: 'Nouveau axe',
          disabled: false,
          to: '/axes/addaxe',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
