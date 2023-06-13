<template>
  <v-container pl-0>
    <v-row>
      <v-col md="12" lg="12" sm="12" class="">
        <v-row class="d-flex align-items-center mb-6 bg-maroon pl-6 py-6 pr-6">

          <v-col md="6" lg="6" sm="12" class="border-right-chart">
                <h4 class="card-title custom-font">Les 3 ministères les plus sollicités</h4>
                <div class="custom-pie-chart mx-auto text-center">
                  <PieChart :courriers="listcourriers"/>
                </div>
              
          </v-col>
          <v-col md="6" lg="6" sm="12" class="border-left-chart">
            <h4 class="card-title custom-font">Répartition mensuelle des courriers</h4>
            <BarChart  :courriers="listcourriers"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import LeftMenu from '@/components/LeftMenu';
import BarChart from "@/components/statistiques/charts/BarChart";
import PieChart from "@/components/statistiques/charts/PieChart";
import { mapMutations, mapGetters } from 'vuex'
import { mapState, mapActions } from 'vuex';
export default {

computed: {
  ...mapState('filtres', ['listcourriers']),

  },
  components: { BarChart, LeftMenu, PieChart },


};

</script>

<style scoped>

.bg-marron{
  border-radius: 5px;
  background-color: #fff;
}
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

.lan {
  fill-opacity: 1;
  stroke: rgb(0, 0, 0);
  stroke-opacity: 1;
  stroke-miterlimit: 22.926;
  stroke-width: 0.5;
}

.description {
  pointer-events: none;
  position: absolute;
  font-size: 18px;
  text-align: center;
  background: rgba(255, 255, 255, 0.795);
  padding: 50px;
  padding-top: 15px;
  z-index: 5;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  color: #21669e;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #eee;
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.description.active {
  display: block;
}

.description:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}

.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 1em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.custom-text-btn {
  font-size: 14px !important;
}

.custom-pie-chart {
  width: 250px;
 
}

.custom-card-box {
  border: solid 2px #99A9B44A;
  padding: 27px;
  max-height: 100%;
}

.border-right {
  border-right: 1px;
}

.box {
  width: 100%;
}

.custom-bg-grey {
  background-color: #F2F2F2;
}

.custom-section {
  background-color: #EEF3FB;
}

.bg-white {
  background-color: #fff;
}

.custom-bloc-chart {
  padding: 26px;
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

.bg-marron {
  border-radius: 5px;
  background-color: #fff;
}
</style>
  