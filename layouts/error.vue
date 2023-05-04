<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md6 lg6>
            <v-card flat class="elevation-0 pl-5 pr-5 pt-0 pb-0">
              <v-card-text>
                <div class="layout column align-center py-5">
                  <img v-if="error.statusCode === 404" src="@/static/404.png" alt="Espace Senegal Service" width="600" height="">
                  <div v-else  class="layout column align-center py-5">
                    <img  src="@/static/error.png" alt="Espace Senegal Service" width="100" height="">
                    <v-spacer></v-spacer>
                    <p>
                      {{ otherError }}
                    </p>
                  </div>
                  
                  <!-- <h1 v-if="error.statusCode === 404">
                    {{ pageNotFound }}
                  </h1> -->
                  <!-- <h1 v-else>
                    {{ otherError }}
                  </h1> -->
                  <!-- <NuxtLink to="/">
                    Retour à l'accueil
                  </NuxtLink> -->
                </div>  
              </v-card-text>               
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'dashboard',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Page introuvable',
      otherError: ('Erreur '+this.error.statusCode)+' '+(this.$hasRole('admin')?this.error.message:'')
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
      console.log('++++++++++++++erreur ',this.error)
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
