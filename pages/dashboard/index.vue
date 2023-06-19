<template>
  <div>
    <div class="custom-container mt-5">
      <v-row class="d-flex align-item-center bg-white justify-content-between pt-6 mb-2 mt-4 pl-5">
        <v-col lg="4" md="4" sm="12">
          <v-autocomplete ref="inputRef" v-model="organisme" :items="listorganismes" outlined dense label="Organisme"
            item-text="intitule" item-value="id" @change="changeOrganisme">
          </v-autocomplete>
        </v-col>
        <v-col lg="4" md="4" sm="12">
          <v-autocomplete ref="inputRef" v-model="annee" :items="listannees" outlined dense label="Année"
            item-text="libelle_annee" item-value="id" @change="changeAnnee">
          </v-autocomplete>
        </v-col>
        <v-col lg="2" md="2" sm="12">
          <v-btn text @click="onClearClicked" rounded color="green">Afficher tout</v-btn>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-content-between">
        <v-col md="3" sm="12" lg="3" class="">
          <div class="custom-stat-boxes bg-marron mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
            <h4 class="custom-stat-boxes-title">Organismes enrôlés</h4>

            <div class="custom-stat-boxes-bloc mt-5">

              <h1 v-show="listorganismes" class="custom-stat-boxes-number">
                {{
                  listorganismes.length
                }}
              </h1>
              <h1 v-show="!listorganismes" class="custom-stat-boxes-number">
                <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#999999">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </h1>
              <span class="icon custom-icon-organismes">
                <svg xmlns="http://www.w3.org/2000/svg" width="55.83" height="55.639" viewBox="0 0 55.83 55.639">

                  <g id="Groupe_7558" data-name="Groupe 7558" transform="translate(-1759.104 -345)">

                    <g id="Groupe_7388" data-name="Groupe 7388" transform="translate(1759.104 391)">

                      <path id="Tracé_6969" data-name="Tracé 6969"
                        d="M54.5,2.02H51.64V-2.17A1.1,1.1,0,0,0,50.5-3.313H47.64v-22.57h6.952a1.2,1.2,0,0,0,1.143-.857.945.945,0,0,0-.476-1.238L28.5-45.786a1,1,0,0,0-1.238,0L.5-27.977a1.24,1.24,0,0,0-.476,1.238,1.23,1.23,0,0,0,1.143.857H8.119v22.57H5.262A1.1,1.1,0,0,0,4.119-2.17V2.02H1.262A1.1,1.1,0,0,0,.119,3.163V8.5A1.1,1.1,0,0,0,1.262,9.639H54.687A1.1,1.1,0,0,0,55.83,8.5V3.163A1.5,1.5,0,0,0,54.5,2.02ZM45.354-3.313H42.307v-22.57h3.047Zm-13.809,0v-22.57h8.38v22.57Zm-16,0v-22.57h8.38v22.57Zm10.666-22.57H29.26v22.57H26.213ZM27.737-43.5,50.687-28.168H4.786ZM10.214-25.882h3.047v22.57H10.214Zm-4,24.855H49.259V2.02H6.214Zm47.139,8.38H2.215V4.306H53.354ZM26.594-40.929v-.286a1.1,1.1,0,0,1,1.143-1.143,1.1,1.1,0,0,1,1.143,1.143v.286a1.1,1.1,0,0,1-1.143,1.143A1.158,1.158,0,0,1,26.594-40.929Zm2.286,10.761v.286a1.1,1.1,0,0,1-1.143,1.143,1.1,1.1,0,0,1-1.143-1.143v-.286a1.1,1.1,0,0,1,1.143-1.143A1.158,1.158,0,0,1,28.879-30.168Zm.191-3.809a.2.2,0,0,0,.19-.191.2.2,0,0,0-.19-.19H26.4a2.521,2.521,0,0,1-2.476-2.476A2.521,2.521,0,0,1,26.4-39.31h3.9a1.1,1.1,0,0,1,1.143,1.143,1.1,1.1,0,0,1-1.143,1.143H26.4a.2.2,0,0,0-.19.191.2.2,0,0,0,.19.19H29.07a2.521,2.521,0,0,1,2.476,2.476,2.521,2.521,0,0,1-2.476,2.476h-4a1.1,1.1,0,0,1-1.143-1.143,1.1,1.1,0,0,1,1.143-1.143Z"
                        transform="translate(0)" fill="#757971" fill-rule="evenodd" />

                    </g>

                    <path id="Tracé_6970" data-name="Tracé 6970"
                      d="M13046.249,2626.784c-5.753,5.946-8.914,9.583-8.914,9.583v3.671l2.144.631,3.331-.894,1.813.894,2.124.767,2.7-.767,3.49-5.1.289-2.89-2.428-3.28-2.26-1.413-1.795-1.206Z"
                      transform="translate(-11260 -2278.884)" fill="#fff" />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </v-col>
        <v-col md="3" sm="12" lg="3" class="">
          <div class="custom-stat-boxes bg-marron mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
            <h4 class="custom-stat-boxes-title">Total courriers reçus</h4>
            <div class="custom-stat-boxes-bloc mt-5">

              <h1 v-show="listcourriers" class="custom-stat-boxes-number">
                {{
                  listcourriers.length
                }}


              </h1>
              <h1 v-show="!listcourriers" class="custom-stat-boxes-number">

                <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#999999">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </h1>
              <span class="icon custom-icon-recus">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="49.58" viewBox="0 0 60 49.58">

                  <g id="Groupe_2109" data-name="Groupe 2109" transform="translate(-1738.5 -304.5)">

                    <g id="archive" transform="translate(1740 306)">

                      <path id="Tracé_2496" data-name="Tracé 2496" d="M49.346,8V41.472H3V8"
                        transform="translate(2.219 5.108)" fill="none" stroke="#7d7e7f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="3" />

                      <rect id="Rectangle_2700" data-name="Rectangle 2700" width="57" height="13"
                        transform="translate(0 0)" fill="none" stroke="#7d7e7f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="3" />

                      <line id="Ligne_510" data-name="Ligne 510" x2="11" transform="translate(23 23)" fill="none"
                        stroke="#7d7e7f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />

                    </g>

                  </g>

                </svg>

              </span>
            </div>

          </div>
        </v-col>
        <v-col md="3" sm="12" lg="3" class="">
          <div class="custom-stat-boxes bg-marron mr-3 pl-4 pr-5 pt-5 pb-5 text-sm-center">
            <h4 class="custom-stat-boxes-title">Total courriers traités</h4>
            <div class="custom-stat-boxes-bloc mt-5">
              <h1 v-show="listcourrierstraites" class="custom-stat-boxes-number">

                {{
                  listcourrierstraites.length
                }}

              </h1>
              <h1 v-show="!listcourrierstraites" class="custom-stat-boxes-number">
                <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#999999">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </h1>
              <span class="icon custom-icon-traites">
                <svg xmlns="http://www.w3.org/2000/svg" width="55.616" height="50.354" viewBox="0 0 55.616 50.354">

                  <g id="Groupe_7556" data-name="Groupe 7556" transform="translate(-1237.453 -304.953)">

                    <path id="folder"
                      d="M54.616,45.093a5.262,5.262,0,0,1-5.262,5.262H7.262A5.262,5.262,0,0,1,2,45.093V8.262A5.262,5.262,0,0,1,7.262,3H20.416l5.262,7.892H49.354a5.262,5.262,0,0,1,5.262,5.262Z"
                      transform="translate(1236.953 303.453)" fill="none" stroke="#7d7e7f" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="3" />

                    <path id="Tracé_2493" data-name="Tracé 2493" d="M17,16.1l7.1,7.1L38.295,9"
                      transform="translate(1237.614 318.744)" fill="none" stroke="#7d7e7f" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="3" />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </v-col>

        <v-col md="3" sm="12" lg="3" class="">
          <div class="custom-stat-boxes bg-marron pl-4 pr-5 pt-5 pb-5 text-sm-center">
            <h4 class="custom-stat-boxes-title color-yellow">Taux de réponse</h4>
            <div class="custom-stat-boxes-bloc mt-5">
              <h1 class="custom-stat-boxes-number color-yellow"
                v-show="listcourriers.length">{{ ((listcourrierstraites.length /
                  listcourriers.length) * 100).toFixed(0) }} %</h1>

              <h1 class="custom-stat-boxes-number color-yellow"
                v-show="!listcourriers.length"> 0 %
                <!-- <svg class="custom-svg" width="50" height="50" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
                  stroke="#999999">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                      <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                          repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg> -->
              </h1>


              <span class="icon custom-icon-taux">
                <svg xmlns="http://www.w3.org/2000/svg" width="63.735" height="63.996" viewBox="0 0 63.735 63.996">

                  <g id="Groupe_7386" data-name="Groupe 7386" transform="translate(-0.5 47.5)">

                    <path id="Tracé_6961" data-name="Tracé 6961"
                      d="M51.721-7.119a5.121,5.121,0,0,0,1.3-3.343,5.033,5.033,0,0,0-4.992-4.96H33.816l1.953-5.607c0-.108.108-.324.108-.431v-2.264a9.59,9.59,0,0,0-2.17-6.038,9.95,9.95,0,0,0-7.814-3.774h-.977a1.25,1.25,0,0,0-1.3,1.294v9.166L17.863-10.03H14.607L14.5-11.108a1.287,1.287,0,0,0-1.3-1.078H1.8A1.25,1.25,0,0,0,.5-10.893V15.2A1.25,1.25,0,0,0,1.8,16.5H16.995a1.379,1.379,0,0,0,.977-.431,1.814,1.814,0,0,0,.326-1.078l2.279,1.186a1.385,1.385,0,0,0,.651.108H44.993a5.033,5.033,0,0,0,4.992-4.96,4.784,4.784,0,0,0-.868-2.8,4.892,4.892,0,0,0,2.93-4.529,4.786,4.786,0,0,0-.868-2.8A4.937,4.937,0,0,0,54-3.237,5.583,5.583,0,0,0,51.721-7.119ZM3.1,14.016V-9.491H12l.108.755v.324l3.147,21.35h0l.109.97ZM48.791-.757H45.21a1.25,1.25,0,0,0-1.3,1.294h0a1.25,1.25,0,0,0,1.3,1.294h1.628A2.4,2.4,0,0,1,49.225,4.2a2.4,2.4,0,0,1-2.387,2.372h-2.93a1.25,1.25,0,0,0-1.3,1.294h0a1.25,1.25,0,0,0,1.3,1.294h.868a2.372,2.372,0,1,1,0,4.744H21.336l-3.69-1.941L14.933-7.226h3.8a1.335,1.335,0,0,0,1.194-.755l6.186-14.126a.967.967,0,0,0,.108-.539v-8.195a7.327,7.327,0,0,1,5.318,2.7,7.273,7.273,0,0,1,1.519,4.421v2.049l-2.388,7.117a1.169,1.169,0,0,0,.217,1.186,1.338,1.338,0,0,0,1.085.539H48.032a2.4,2.4,0,0,1,2.388,2.372,2.4,2.4,0,0,1-2.388,2.372H44.776a1.25,1.25,0,0,0-1.3,1.294,1.25,1.25,0,0,0,1.3,1.294H48.9a2.4,2.4,0,0,1,2.388,2.372A2.575,2.575,0,0,1,48.791-.757ZM64.2-38.6a1.309,1.309,0,0,0-1.3-.863H55.194l-2.388-7.224a1.367,1.367,0,0,0-2.5,0l-2.387,7.224h-7.7a1.411,1.411,0,0,0-1.3.863,1.328,1.328,0,0,0,.434,1.51l6.186,4.421-2.388,7.224a1.328,1.328,0,0,0,.434,1.509,1.31,1.31,0,0,0,1.519,0l6.186-4.421,6.186,4.421a1.037,1.037,0,0,0,.759.216,1.574,1.574,0,0,0,.76-.216,1.328,1.328,0,0,0,.434-1.509l-2.388-7.224,6.186-4.421C64.2-37.526,64.31-38.065,64.2-38.6Zm-9.007,4.313a1.328,1.328,0,0,0-.434,1.51l1.411,4.313-3.69-2.7a1.31,1.31,0,0,0-1.519,0l-3.69,2.7,1.411-4.313a1.329,1.329,0,0,0-.434-1.51l-3.69-2.7h4.558a1.41,1.41,0,0,0,1.3-.863l1.411-4.313,1.411,4.313a1.308,1.308,0,0,0,1.3.863H59.1Z"
                      transform="translate(0 0)" fill="#757971" fill-rule="evenodd" />

                  </g>

                </svg>
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="custom-container mt-5 mr-8 ml-8 pl-4 pr-1 pt-5 pb-5">
      <list-chart></list-chart>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import ListChart from "@/components/statistiques/charts/ListChart";
import LeftMenu from "@/components/LeftMenu";


export default {

  layout: "dashboard",
  components: {

    LeftMenu,
    ListChart,
  },
  computed: {
    // ...mapState('filtres', ['listcourriers']),
    // ...mapState('filtresannees', ['listcourriersannee']),
    ...mapGetters({
      listcourriers: 'courriers/listcourriers',
      isloading: 'courriers/isloading',
      initiallistcourriers: 'courriers/initiallistcourriers',
      listcourrierstraites: 'courriers/listcourrierstraites',
      listorganismes: 'organismes/listorganismes',
      listannees: 'annees/listannees',
    }),

  },


  mounted: async function () {

 
   
    await this.$store.dispatch('organismes/getList')
    await this.$store.dispatch('courriers/getList')
      const currentYear = new Date().getFullYear();
      const newlistpie = await this.initiallistcourriers.filter((item) => this.getYearFromCreatedAt(item.createdAt) == currentYear)
      await this.$store.dispatch('courriers/updateListPie', newlistpie)
      this.$store.dispatch('courriers/getListTraites')
     await this.$store.dispatch('annees/getList')
     await this.$store.dispatch('mois/getList')
     this.$store.dispatch('courriers/updateIsPieLoading', false)
      this.$store.dispatch('courriers/updateIsBarLoading', false)
  

  },

  data() {
    return {
      annee: '',
      nombreOrganismes: 0,
      tauxDeReponse: 0,
      nombreCourriers: 0,
      nombreCourriersTraites: 0,
      organisme: '',
    };
  },
  methods: {
    setDefaultAnnee() {
      const anneeActuelle = new Date().getFullYear();

      // Recherche de l'objet année correspondant à l'année actuelle

      return anneeActuelle
      // if (anneeParDefaut) {
      //   this.annee = anneeParDefaut;
      // }
    },
    // ...mapActions('filtres', ['updateListCourriers']),
    // ...mapActions('filtresannees', ['updateListCourriersAnnee']),

    async changeAnnee(value) {

      console.log(value)

      const newlistpie = await this.initiallistcourriers.filter((item) => this.getYearFromCreatedAt(item.createdAt) == value)
      await this.$store.dispatch('courriers/updateListPie', newlistpie)

      this.updateCourrier(value, 'annee')

    },
    async changeOrganisme(value) {

      console.log(value)
      this.updateCourrier(value, 'organisme')
    },
    async onClearClicked() {
      this.organisme = ''
      this.annee = ''
      this.$store.dispatch('courriers/updateListPie', this.initiallistcourriers)
      this.$store.dispatch('courriers/updateList', this.initiallistcourriers)
      // await this.updateListCourriers(this.listcourriers);

      // await this.updateListCourriersAnnee(this.listcourriers);
      //   this.nombreOrganismes = this.listorganismes.length
      // this.nombreCourriers = this.listcourriers.length
      // const traitelist = await this.listcourriers?.filter((item) => item.traitement_status_slug == "traite")
      // this.nombreCourriersTraites = await traitelist?.length
      // if (this.nombreCourriersTraites && this.nombreCourriers) {
      //   this.tauxDeReponse = ((this.nombreCourriersTraites / this.nombreCourriers) * 100).toFixed(0);
      // }
    },
    async updateCourrier(value, type) {
      var list = []

      if (type == 'organisme') {
        this.organisme = value
        if (this.annee != '') {
          list = await this.initiallistcourriers.filter((item) => (this.getYearFromCreatedAt(item.createdAt) == this.annee && item.structure == value))

        } else {
          list = this.initiallistcourriers.filter((item) => (item.structure == value))
        }
      }


      if (type == 'annee') {
        this.annee = value
        if (this.organisme != '') {
          list = this.initiallistcourriers.filter((item) => (item.structure == this.organisme && this.getYearFromCreatedAt(item.createdAt) == value))
        } else {
          list = await this.initiallistcourriers.filter((item) => this.getYearFromCreatedAt(item.createdAt) == value)

        }

      }
      // console.log(list)
      this.updateStat(list)
    },

    getYearFromCreatedAt(createdAt) {
      const date = new Date(createdAt)
      return date.getFullYear()
    },
    async updateStat(newlist) {
      // await this.updateListCourriers(newlist);
      this.$store.dispatch('courriers/updateList', newlist)
      this.$store.dispatch('courriers/updateListTraites', newlist)

      // console.log('Change list ++++ ', newlist)
      // this.nombreCourriers = await newlist?.length;
      // const newtraitelist = await newlist?.filter((item) => item.traitement_status_slug == "traite")
      // this.nombreCourriersTraites = await newtraitelist?.length
      // if (this.nombreCourriers) {
      //   this.tauxDeReponse = ((this.nombreCourriersTraites / this.nombreCourriers) * 100).toFixed(0)
      // }
      // else {
      //   this.tauxDeReponse = 0
      // }

    },
  },

}
</script>
  
<style scoped>
.custom-stat-boxes:hover .custom-icon-taux svg path {
  fill: #fff;
}

.custom-stat-boxes:hover .custom-icon-traites svg path {
  stroke: #fff;
}

.custom-stat-boxes:hover .custom-icon-organismes svg path:first-child {
  fill: #fff;
}

.custom-stat-boxes:hover .custom-icon-organismes svg path:nth-child(2) {
  fill: #0a3764;
}

.custom-stat-boxes:hover .custom-icon-recus svg rect {
  stroke: #fff;
}

.custom-stat-boxes:hover .custom-icon-recus svg path {
  stroke: #fff;
}

.custom-stat-boxes:hover .custom-icon-recus svg line {
  stroke: #fff;
}


.custom-stat-boxes-bloc {
  display: flex;
  align-items: center;
  padding-top: 50px
}

.custom-stat-boxes {
  height: 210px;
}

.custom-stat-boxes:hover,
.custom-stat-boxes:hover h1,
.custom-stat-boxes:hover svg {
  color: #ffffff;
  background-color: #0a3764;
}

.custom-stat-boxes:hover>h1 {
  color: #ffffff;

}

.custom-stat-boxes-title {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
}

.custom-stat-boxes-number {
  padding-top: 20px;
  flex: 1;
  font-size: 34px;
  color: black;
  font-weight: 700;
  text-align: left;
}

.bg-marron {
  border-radius: 5px;
  padding: 30px;
  color: #7d7e80;
  min-height: 110px;
  background-color: #ffffff;
}

.bg-marron:hover {
  background-color: #0a3764;
  color: #ffffff !important;
}


.color-white {
  color: #fff;
}

.border-right-solid {
  border-right: solid 1px #ffffff59;
  padding: 20px;
}

.bg-white {
  border-radius: 5px;
  background-color: #fff;
  margin-left: 0.3px;
  margin-right: 0.3px;
}</style>
  