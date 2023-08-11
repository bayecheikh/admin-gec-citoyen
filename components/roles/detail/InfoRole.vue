<template>
  <v-card class="custom-card-user border-grey">
    <v-card-text>
      <v-row>
        
        <v-col md="9" sm="12" lg="9" text-md-left>
          <div class="row">
            <div class="col-md-6 border-left">
              <p class="info-profil mb-4"><span>Nom :
                </span>{{ detailrole.name }}
              </p>
              <p class="info-profil mb-4"><span>Description :
                </span>{{ detailrole.description }}
              </p>

            </div>
            <div class="col-md-6 border-right">
            <p class="info-profil mb-4"><span>Permissions : </span>
                <v-chip color="primary" small outlined class="my-1 mr-1" v-for="permission in detailrole.permissions"
                  :key="permission.id">
                  {{ permission.name }}
                </v-chip>
              </p>
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
    detailrole: 'roles/detailrole'
  }),
  
}
</script>
<style scoped>
.border-left {
  border-left: solid 2px rgb(0 0 0 / 4%);
  ;
}
</style>