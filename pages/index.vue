<template></template>

<script>


export default {

  mounted: async function () {

    let isAuthenticate = this.$isLogged()
    if (!isAuthenticate) {
      this.$router.push('/login')
    }
    else
      this.$router.push('/parametres')
  }
}
</script>

<style>
.v-application .primary {
  background-color: #0a3764 !important;
  border-color: #0a3764 !important;
}
</style>

