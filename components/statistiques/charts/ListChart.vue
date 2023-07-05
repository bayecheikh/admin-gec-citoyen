<template>
  <v-container pl-0>
    <v-row>
      <v-col md="12" lg="12" sm="12" class="">
        <v-row class="d-flex align-items-center mb-6 bg-maroon pl-6 py-6 pr-6">

          <v-col md="6" lg="6" sm="12" class="border-right-chart">
            <h4 class="card-title custom-font">Les 3 ministères les plus sollicités</h4>
            <div v-show="!ispieloading" class="custom-pie-chart mx-auto text-center">
              <PieChart />
            </div>
            <div v-show="ispieloading" class="custom-pie-chart-loader mx-auto mt-5 text-center">
              <svg class="custom-svg" width="250" height="250" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                stroke="#4a7197">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(1 1)" stroke-width="0.5">
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                        repeatCount="indefinite" />
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </v-col>
          <v-col md="6" lg="6" sm="12" class="border-left-chart">
            <h4 class="card-title custom-font">Répartition mensuelle des courriers</h4>
            <div v-show="!isbarloading">
              <BarChart />
            </div>
            <div v-show="isbarloading" class="custom-pie-chart-loader mx-auto mt-5 text-center">
              <svg class="custom-svg" width="250" height="250" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                stroke="#4a7197">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(1 1)" stroke-width="0.5">
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                        repeatCount="indefinite" />
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import BarChart from "@/components/statistiques/charts/BarChart";
import PieChart from "@/components/statistiques/charts/PieChart";
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters({
      ispieloading: 'courriers/ispieloading',
      isbarloading: 'courriers/isbarloading',

    })
  },
  components: { BarChart, PieChart },
};

</script>

<style scoped>
path {
  fill: #ffffff;
  cursor: pointer;
  -webkit-transition: all 150ms;
  -moz-transition: all 150ms;
  -o-transition: all 150ms;
  transition: all 150ms;
}

path:hover {
  opacity: 0.85;
}


.custom-pie-chart {
  width: 250px;

}

.custom-pie-chart-loader>svg {
  width: 250px;
  margin-top: 40px;

}

.border-right-chart {

  border-right: solid 1px #aeb4b7;
  margin-bottom: 40px;
  background-color: #fff;
}

.border-left-chart {
  background-color: #fff;
  margin-bottom: 40px;
}

</style>
  