<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>

        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">

              <p class="info-profil mb-4"><span>Nom : </span>{{ detailorganisme.name }}</p>
              <p class="info-profil mb-4"><span>GED : </span>{{ detailorganisme.ged }}</p>
              <p class="info-profil mb-4"><span>GEC : </span>{{ detailorganisme.gec }}</p>
              <p class="info-profil mb-4"><span>Intitule : </span>{{ detailorganisme.intitule }}</p>
              <p class="info-profil mb-4"><span>Type Structure : </span>{{ detailorganisme.typeStructure.name }}</p>

            </div>
            <div class="col-md-6 border-right">
              <p class="info-profil mb-4"><span>Description : </span>{{ detailorganisme.description }}</p>
              <p class="info-profil mb-4"><span>Base URL : </span>{{ detailorganisme.baseUrl }}</p>
              <p class="info-profil mb-4"><span>GED URL : </span>{{ detailorganisme.gedUrl }}</p>
              <p class="info-profil mb-4"><span>GEC URL : </span>{{ detailorganisme.gecUrl }}</p>
              <p class="info-profil mb-4" v-show="detailorganisme.status == 1"><span>Statut : </span>Actif</p>
              <p class="info-profil mb-4" v-show="detailorganisme.status == 0"><span>Statut : </span>Inactif</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    detailorganisme: 'organismes/detailorganisme'
  }),
}
</script>
<style scoped>
.border-left {
  border-left: solid 2px rgb(0 0 0 / 4%);
  ;
}
</style>