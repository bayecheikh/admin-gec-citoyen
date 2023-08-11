<template></template>

<script>


export default {

  mounted: async function () {

    let isAuthenticate = this.$isLogged()
    if (!isAuthenticate) {
      this.$router.push('/login')
    }
    else{
      if (this.$hasPermission("voir-dashboard")) {
        this.$router.push('/dashboard')
        return
        }
      
      if ((this.$hasPermission("gerer-roles") || this.$hasPermission("gerer-permissions") || this.$hasPermission("gerer-organismes") || this.$hasPermission("gerer-faq") || this.$hasPermission("gerer-contenus-dynamiques")) ) {
        this.$router.push('/parametres')
        return
        }
        if (this.$hasPermission("gerer-utilisateurs")) {
        this.$router.push('/utilisateurs')
        return
        }
    }
  }
}
</script>

<style>
.v-application .primary {
  background-color: #0a3764 !important;
  border-color: #0a3764 !important;
}
</style>

