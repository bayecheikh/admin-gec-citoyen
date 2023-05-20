<template>

  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5 row">
    <v-card class="pl-10 pt-10 pb-10 pr-10 col-md-2 col-lg-2 col-sm-12 text-sm-center mb-4 mr-4 ml-4 mt-4" v-for="(item,i) in layoutadmin" :key="i">  
      <nuxt-link class="customTopNav" :to="item.href? item.href : null">
          <v-icon :color="$route.path==item.href?'primary':''">{{ item.icon }}</v-icon>
          <div :class="$route.path==item.href?'text-primary':''">{{ item.title }}</div>  
      </nuxt-link>
    </v-card>
  </div> 
</div>
</template>

<script>
  export default {
    layout: "dashboard",
    // middleware: function ({redirect,$hasPermission}) {
    //   // if(!$hasPermission('gerer-parametres')){
    //   //   return redirect('/')
    //   // }
    // },
    components: {
    },
    mounted: function() {
      this.layoutadmin= this.$getParametreMenu()
    },
    data:  function () {      
      return {
        layoutadmin:[] ,
        headerItems: [
          {
            text: 'Paramétrage',
            disabled: false,
            to: '/parametres',
            exact: true
          }
        ]    
      }
    },

  }
</script>

<style scoped>

</style>
