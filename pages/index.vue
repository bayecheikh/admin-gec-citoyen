<template>
    
</template>

<script>
    import { mapGetters} from 'vuex';
    export default {
      methods: {
        getYearFromCreatedAt(createdAt) {
      const date = new Date(createdAt)
      return date.getFullYear()
    },
      },
      computed: {
   
    ...mapGetters({
        initiallistcourriers:'courriers/initiallistcourriers',
    }),

  },
    mounted: async function () {
      await this.$store.dispatch('courriers/getList')
      const currentYear = new Date().getFullYear();
      const newlistpie = await this.initiallistcourriers.filter((item) => this.getYearFromCreatedAt(item.createdAt) == currentYear)
      await this.$store.dispatch('courriers/updateListPie', newlistpie)
      this.$store.dispatch('organismes/getList')
      
      // this.$store.dispatch('courriers/getListTraites')
      this.$store.dispatch('annees/getList')
   
      console.log("AAAA+++++")
      let isAuthenticate = this.$isLogged()
      if(!isAuthenticate){
      this.$router.push('/login')
      }
      else
      this.$router.push('/parametres')
    }
      }
</script>

<style scoped>

</style>