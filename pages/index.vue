<template>
    
</template>

<script>
    export default {
        mounted()
        {
          let isAuthenticate = this.$isLogged()
          if(!isAuthenticate){
          //this.$router.push('/login')
          }
          else
          this.$router.push('/parametres')
        }
    }
</script>

<style scoped>

</style>