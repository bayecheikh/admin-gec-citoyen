
  <template>
    <v-card flat>
      <v-tabs
        v-model="tab"
        background-color="primary"
        
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1">
          Statistiques
          <v-icon>mdi-view-dashboard</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          Pièces jointes
          <v-icon>mdi-file</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Financements
          <v-icon>mdi-credit-card</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="pt-5">
        <v-tab-item
          value="tab-1"
        >
          <v-row>
            <v-col md="3" sm="12" lg="3" v-if="detailstructure.users">
              <stat-box 
                :title="'Nombre d\'utilisateurs actifs '"                
                :icon="'mdi-account-group-outline'"
                :nbr="detailstructure.users.length"
                :colorIcon="'#00ac47'"
                :colorText="'#00ac47'"
                :class="'custom-card-user  border-user'"
              >
              </stat-box>
            </v-col>
            <v-col md="3" sm="12" lg="3" v-if="detailstructure.departements.length!=0">
              <stat-box 
                :title="'Nombre de departements d\'intervention'"  
                :icon="'mdi-map'"
                :nbr="detailstructure.departements.length"
                :colorIcon="'#007cf6'"
                :class="'custom-card-user  border-user'"
              >
              </stat-box>
            </v-col>
            <v-col md="3" sm="12" lg="3" v-if="detailstructure.regions.length!=0">
              <stat-box 
                :title="'Nombre de régions d\'intervention'"
                :icon="'mdi-map'"
                :nbr="detailstructure.regions.length"
                :colorIcon="'#007cf6'"
                :class="'custom-card-user  border-user'"
              >
              </stat-box>
            </v-col>
            <v-col md="3" sm="12" lg="3">
              <stat-box 
                :title="'Nombre de financement'"
                :icon="'mdi-credit-card'"
                :nbr="'245'"
                :colorIcon="'#ffba00'"
                :class="'custom-card-user  border-user'"
              >
              </stat-box>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>

      <v-tabs-items v-model="tab">
        <v-tab-item
          value="tab-2"
        >
          <v-card flat>
            <v-card-text>Pièces jointes : </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <v-tabs-items v-model="tab">
        <v-tab-item
          value="tab-3"
        >
          <v-card flat>
            <v-card-text>Fiancements</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </template>
        
<script>
import { mapMutations, mapGetters } from 'vuex'
import StatBox from '@/components/dashboard/admin/StatBox';
  export default {
    components: {
      StatBox
    },
    mounted: function() {
      //this.getDetail(this.id)
    },
    computed: mapGetters({
      detailstructure: 'structures/detailstructure'
    }),
    data () {
      return {
        id : this.$nuxt._route.params.id,
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    methods: {
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/structures/'+id)
        .then(async (response) => {
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('structures/getDetail',response.data)
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
        });
        //console.log('total items++++++++++',this.paginationstructure)
      },
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/structures');
      },
    },
  }
</script>
