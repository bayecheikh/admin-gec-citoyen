<template>
  <v-app id="inspire">
    <v-main class="">
      <nuxt />
    </v-main>
    <!--     <v-footer height="auto" class="white pa-3">
      <span class="caption">&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <span class="caption mr-1"> IP3-CONSEIL</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
export default {
  components: {
    AppToolbar
  }
}
</script>