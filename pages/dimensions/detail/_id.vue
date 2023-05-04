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
              <info-dimension></info-dimension>
            </v-col>
            <v-col cols="12" md="12" lg="12" sm="12">
              <actions-dimension></actions-dimension>
            </v-col>
          </v-row>
    </v-card>
  </div> 
</div>  
</template>

<script>
import PageHeader from '@/components/PageHeader';
import InfoDimension from '@/components/dimensions/detail/InfoDimension';
import ActionsDimension from '@/components/dimensions/detail/ActionsDimension';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      InfoDimension,
      ActionsDimension
    },
    middleware: function ({redirect,$hasermission}) {
      if(!$hasermission('gerer-dimensions')){
        return redirect('/')
      }
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Roles', icon: 'mdi-lock',link:'/roles',position:1  },
          { text: 'dimensions', icon: 'mdi-lock',link:'/dimensions',position:2  }
        ],
        headerItems: [
        {
          text: 'dimensions',
          disabled: false,
          to: '/dimensions',
          exact: true
        },
        {
          text: 'Detail dimension',
          disabled: true,
          to: '/dimensions/94',
          exact: true
        }
        
        ]

      }
    }

  }
</script>

<style scoped>

</style>
