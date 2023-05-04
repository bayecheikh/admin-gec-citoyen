<template>
  <div>
  <div class="custom-container bg-title-grey">
      <page-header :items="headerItems" class=""></page-header>  
  </div> 
  <div class="custom-container mt-5">
      <form-update-structure></form-update-structure>
  </div> 
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import FormUpdateStructure from '@/components/structures/modifier/FormUpdateStructure';
  export default {
    layout: "dashboard",
    components: {
      PageHeader,
      FormUpdateStructure
    },
    middleware: function ({redirect,$hasPermission}) {
      if(!$hasPermission('gerer-structures')){
        return redirect('/')
      }
    },
    mounted: function() {
      //this.$store.dispatch('roles/getList')
      /* this.$store.dispatch('structures/getList')
      this.$store.dispatch('fournisseurs/getList') */
      this.$store.dispatch('type-zones/getList')
      this.$store.dispatch('typesources/getList')
      this.$store.dispatch('sources/getList')
      this.$store.dispatch('regions/getList')
      this.$store.dispatch('departements/getList')
      this.$store.dispatch('dimensions/getList')
    },
    data () {
      return {
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
