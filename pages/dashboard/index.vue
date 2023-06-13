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

              <h1 class="custom-stat-boxes-number">
                {{
                  nombreOrganismes
                }}
              </h1>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36.793" height="36.763" viewBox="0 0 56.793 56.763">

                  <g id="Groupe_7609" data-name="Groupe 7609" transform="translate(0.5 0.541)">

                    <path id="Tracé_8086" data-name="Tracé 8086"
                      d="M51.917,23.6c0,1.044.03,2.036-.014,3.028a2.333,2.333,0,0,1-.321,1.243,6.06,6.06,0,0,1-1.293.981V43.086a5.56,5.56,0,0,1,.813.341,1.733,1.733,0,0,1,.816,1.613c0,1.031,0,2.062,0,3.158h2.824c.817,0,1.05.24,1.051,1.072v5.413c0,.786-.25,1.038-1.025,1.038H1.024c-.754,0-1.017-.251-1.018-.986Q0,51.976,0,49.208c0-.751.249-1,1-1.007,1.188-.007,2.375,0,3.666,0V45.424c0-1.437.248-1.8,1.625-2.344v-.544q0-6.623.008-13.247c0-.41-.061-.634-.514-.782A1.636,1.636,0,0,1,4.671,26.8c-.007-1.035,0-2.068,0-3.169-.249-.012-.451-.029-.654-.029-1,0-2,.008-2.994-.007a.778.778,0,0,1-.872-.85c-.014-1.881,0-3.763-.007-5.644,0-.5.317-.74.7-.969q5.448-3.279,10.89-6.569Q19.436,4.91,27.141.252a1.256,1.256,0,0,1,1.481-.02q13.022,7.88,26.067,15.72a1.731,1.731,0,0,1,.982,1.747c-.061,1.611-.014,3.225-.019,4.837,0,.8-.263,1.061-1.071,1.067H51.919M1.739,21.97H54.053c0-1.362-.019-2.683.012-4a.811.811,0,0,0-.479-.808Q40.993,9.581,28.414,1.97a.838.838,0,0,0-1.02-.014Q21.2,5.728,14.987,9.461q-6.4,3.862-12.8,7.735c-.184.113-.419.341-.423.522-.035,1.4-.019,2.8-.019,4.251M54.166,49.82H1.636v4.267h52.53ZM32.216,43.083c1.4.509,1.657.883,1.657,2.384v2.686H40V44.946a1.628,1.628,0,0,1,.656-1.4,6.425,6.425,0,0,1,.958-.479V28.693C40.3,28.249,40,27.828,40,26.454V23.643H33.869v2.684c0,1.5-.255,1.874-1.657,2.386ZM23.581,28.721c-1.43-.544-1.656-.88-1.656-2.442V23.644H16.647a.883.883,0,0,0-.037.156q0,1.3-.006,2.592c0,1.426-.259,1.8-1.586,2.305V43.121A1.848,1.848,0,0,1,16.6,45.277V48.2h5.322V45.37c0-1.392.319-1.832,1.656-2.275ZM7.928,43.1h5.42V28.671H7.928Zm17.305.01h5.328V28.662H25.234ZM48.623,28.695H43.269V43.123h5.353Zm-33.653-5H6.305v3.323H14.97Zm17.245-.007H23.564v3.325h8.651ZM6.295,48.114H14.97V44.79H6.295Zm17.265.013h8.666V44.782H23.558ZM41.624,26.994h8.668V23.68H41.624ZM50.29,44.8H41.644v3.346h8.644Z"
                      transform="translate(0 0)" fill="#7d7e80" stroke="#7d7e80" stroke-width="1" />

                    <path id="Tracé_8087" data-name="Tracé 8087"
                      d="M159.9,57.945a4.739,4.739,0,1,1-1.405-3.359,4.756,4.756,0,0,1,1.405,3.359m-4.777,3.193a3.134,3.134,0,1,0-2.225-.921,3.159,3.159,0,0,0,2.225.921"
                      transform="translate(-127.25 -45.028)" fill="#7d7e80" stroke="#7d7e80" stroke-width="1" />

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

              <h1 class="custom-stat-boxes-number">
                {{
                  nombreCourriers
                }}


              </h1>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="53.969" height="41.098" viewBox="0 0 83.969 51.098">
                  <g id="Groupe_7607" data-name="Groupe 7607" transform="translate(-739.016 -915.625)">
                    <g id="Groupe_7604" data-name="Groupe 7604" transform="translate(738.516 946.125)">
                      <path id="Tracé_8090" data-name="Tracé 8090"
                        d="M61.124,6.035v13.03A1.472,1.472,0,0,1,59.6,20.6H2.025A1.472,1.472,0,0,1,.5,19.065v-35.13h0a1.273,1.273,0,0,1,.508-.639.125.125,0,0,0,.127-.128,1.83,1.83,0,0,1,.89-.256H37.485a1.472,1.472,0,0,1,1.525,1.533,1.472,1.472,0,0,1-1.525,1.533H7.49L30.749.031l7.753-4.6a1.554,1.554,0,0,1,2.034.511,1.571,1.571,0,0,1-.508,2.044L31.511,2.969a1.8,1.8,0,0,1-.763.256,1.8,1.8,0,0,1-.763-.256L3.55-13V17.532H58.074V6.035A1.472,1.472,0,0,1,59.6,4.5,1.55,1.55,0,0,1,61.124,6.035ZM22.869,1.947,5.584,13.572A1.493,1.493,0,0,0,5.2,15.744a1.563,1.563,0,0,0,1.271.639,2.343,2.343,0,0,0,.89-.256L24.648,4.5a1.493,1.493,0,0,0,.381-2.172A1.606,1.606,0,0,0,22.869,1.947Zm13.98.383A1.625,1.625,0,0,0,37.23,4.5L54.515,16.127a1.827,1.827,0,0,0,.89.256,1.562,1.562,0,0,0,1.271-.639,1.626,1.626,0,0,0-.381-2.172L39.009,1.947A1.56,1.56,0,0,0,36.849,2.33Zm37.62-15.713A17.075,17.075,0,0,1,57.438,3.736,17.076,17.076,0,0,1,40.408-13.382,17.075,17.075,0,0,1,57.438-30.5,17.075,17.075,0,0,1,74.469-13.382Zm-3.05,0a13.976,13.976,0,0,0-13.98-14.052A13.976,13.976,0,0,0,43.458-13.382,13.976,13.976,0,0,0,57.438.67,14.058,14.058,0,0,0,71.419-13.382ZM68.5-12.233a1.745,1.745,0,0,1-1.017.639c-.508.128-.89.128-1.4.256h0l.254,1.533a1.229,1.229,0,0,1-.381,1.278,1.378,1.378,0,0,1-1.144.511h-.127L54.261-8.656l.508,3.066A1.563,1.563,0,0,1,53.5-3.8h-.254a1.512,1.512,0,0,1-1.525-1.277l-.636-3.449-3.05.511h-.254a2.351,2.351,0,0,1-.89-.256,1.756,1.756,0,0,1-.636-1.022l-1.017-6a1.563,1.563,0,0,1,1.271-1.789l4.321-.766,11.184-5.11a2.155,2.155,0,0,1,1.271,0c.381.256.763.639.763,1.022l.254,1.405,1.4-.256a1.215,1.215,0,0,1,1.144.256,5.787,5.787,0,0,1,2.415,3.7A6.019,6.019,0,0,1,68.5-12.233Zm-19.318.894,1.525-.256-.508-2.938-1.525.256Zm13.853.128L62.9-12.233h0l-1.017-6h0l-.127-1.022-8.515,3.832.636,3.577Zm3.432-4.854a3.6,3.6,0,0,0-.636-1.405l-.763.128.508,2.938a5.472,5.472,0,0,0,.636-.128A1.877,1.877,0,0,0,66.462-16.065Z"
                        transform="translate(0 0)" fill="#7d7e80" fill-rule="evenodd" />
                    </g>
                    <ellipse id="Ellipse_861" data-name="Ellipse 861" cx="13" cy="13.5" rx="13" ry="13.5"
                      transform="translate(783 919)" fill="#fff" />
                    <g id="Groupe_7605" data-name="Groupe 7605" transform="translate(788 927)">
                      <path id="Tracé_7173" data-name="Tracé 7173" d="M20,6,9,17,4,12" transform="translate(-4 -6)"
                        fill="none" stroke="#7d7e80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
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
              <h1 class="custom-stat-boxes-number">

                {{
                  nombreCourriersTraites
                }}

              </h1>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="53.969" height="41.098" viewBox="0 0 83.969 51.098">
                  <g id="Groupe_7607" data-name="Groupe 7607" transform="translate(-739.016 -915.625)">
                    <g id="Groupe_7604" data-name="Groupe 7604" transform="translate(738.516 946.125)">
                      <path id="Tracé_8090" data-name="Tracé 8090"
                        d="M61.124,6.035v13.03A1.472,1.472,0,0,1,59.6,20.6H2.025A1.472,1.472,0,0,1,.5,19.065v-35.13h0a1.273,1.273,0,0,1,.508-.639.125.125,0,0,0,.127-.128,1.83,1.83,0,0,1,.89-.256H37.485a1.472,1.472,0,0,1,1.525,1.533,1.472,1.472,0,0,1-1.525,1.533H7.49L30.749.031l7.753-4.6a1.554,1.554,0,0,1,2.034.511,1.571,1.571,0,0,1-.508,2.044L31.511,2.969a1.8,1.8,0,0,1-.763.256,1.8,1.8,0,0,1-.763-.256L3.55-13V17.532H58.074V6.035A1.472,1.472,0,0,1,59.6,4.5,1.55,1.55,0,0,1,61.124,6.035ZM22.869,1.947,5.584,13.572A1.493,1.493,0,0,0,5.2,15.744a1.563,1.563,0,0,0,1.271.639,2.343,2.343,0,0,0,.89-.256L24.648,4.5a1.493,1.493,0,0,0,.381-2.172A1.606,1.606,0,0,0,22.869,1.947Zm13.98.383A1.625,1.625,0,0,0,37.23,4.5L54.515,16.127a1.827,1.827,0,0,0,.89.256,1.562,1.562,0,0,0,1.271-.639,1.626,1.626,0,0,0-.381-2.172L39.009,1.947A1.56,1.56,0,0,0,36.849,2.33Zm37.62-15.713A17.075,17.075,0,0,1,57.438,3.736,17.076,17.076,0,0,1,40.408-13.382,17.075,17.075,0,0,1,57.438-30.5,17.075,17.075,0,0,1,74.469-13.382Zm-3.05,0a13.976,13.976,0,0,0-13.98-14.052A13.976,13.976,0,0,0,43.458-13.382,13.976,13.976,0,0,0,57.438.67,14.058,14.058,0,0,0,71.419-13.382ZM68.5-12.233a1.745,1.745,0,0,1-1.017.639c-.508.128-.89.128-1.4.256h0l.254,1.533a1.229,1.229,0,0,1-.381,1.278,1.378,1.378,0,0,1-1.144.511h-.127L54.261-8.656l.508,3.066A1.563,1.563,0,0,1,53.5-3.8h-.254a1.512,1.512,0,0,1-1.525-1.277l-.636-3.449-3.05.511h-.254a2.351,2.351,0,0,1-.89-.256,1.756,1.756,0,0,1-.636-1.022l-1.017-6a1.563,1.563,0,0,1,1.271-1.789l4.321-.766,11.184-5.11a2.155,2.155,0,0,1,1.271,0c.381.256.763.639.763,1.022l.254,1.405,1.4-.256a1.215,1.215,0,0,1,1.144.256,5.787,5.787,0,0,1,2.415,3.7A6.019,6.019,0,0,1,68.5-12.233Zm-19.318.894,1.525-.256-.508-2.938-1.525.256Zm13.853.128L62.9-12.233h0l-1.017-6h0l-.127-1.022-8.515,3.832.636,3.577Zm3.432-4.854a3.6,3.6,0,0,0-.636-1.405l-.763.128.508,2.938a5.472,5.472,0,0,0,.636-.128A1.877,1.877,0,0,0,66.462-16.065Z"
                        transform="translate(0 0)" fill="#7d7e80" fill-rule="evenodd" />
                    </g>
                    <ellipse id="Ellipse_861" data-name="Ellipse 861" cx="13" cy="13.5" rx="13" ry="13.5"
                      transform="translate(783 919)" fill="#fff" />
                    <g id="Groupe_7605" data-name="Groupe 7605" transform="translate(788 927)">
                      <path id="Tracé_7173" data-name="Tracé 7173" d="M20,6,9,17,4,12" transform="translate(-4 -6)"
                        fill="none" stroke="#7d7e80" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                    </g>
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
              <h1 class="custom-stat-boxes-number color-yellow">{{ tauxDeReponse }} %</h1>

              <span class="icon custom-icon-taux">
                <svg xmlns="http://www.w3.org/2000/svg" width="43.97" height="42.865" viewBox="0 0 53.97 42.865">
                  <g id="Groupe_7603" data-name="Groupe 7603" transform="translate(-0.5 33.5)">
                    <path id="Tracé_8088" data-name="Tracé 8088"
                      d="M54.178-2.917a18.152,18.152,0,0,0-5.014-4.076c-2.125-.978-7.738,1.848-11.553,4.13-.272-3.1-3.052-4.456-5.123-5.435-.327-.163-.654-.326-.926-.489L26.385-11.5a10.491,10.491,0,0,0-4.959-1.25H1.862A1.347,1.347,0,0,0,.5-11.395V7.3A1.347,1.347,0,0,0,1.862,8.659H12.108A1.347,1.347,0,0,0,13.47,7.3V4.366L25.677,8.55a16.212,16.212,0,0,0,5.068.815,15.927,15.927,0,0,0,7.52-1.9L53.742-.852a1.491,1.491,0,0,0,.708-.924A1.353,1.353,0,0,0,54.178-2.917ZM10.8,5.942H3.225V-10.09H10.8Zm26.212-.87a13.131,13.131,0,0,1-10.409.87L13.524,1.485V-10.09h7.956a7.747,7.747,0,0,1,3.651.924l5.177,2.717c.327.163.654.326,1.035.489,2.18,1.087,3.6,1.9,3.6,3.478a1.866,1.866,0,0,1-.436,1.141,2.157,2.157,0,0,1-2.725.815A89.672,89.672,0,0,1,22.734-4.71a1.354,1.354,0,0,0-1.8.6,1.347,1.347,0,0,0,.6,1.793c.272.109,6.321,3.261,9.373,4.293a5.8,5.8,0,0,0,1.853.326,4.516,4.516,0,0,0,2.616-.815,1.19,1.19,0,0,0,.272-.163c1.962-1.359,10.681-6.3,12.316-5.978a10.879,10.879,0,0,1,2.943,2.174Zm-5.4-23.695-1.144,6.739a1.245,1.245,0,0,0,.545,1.3,1.343,1.343,0,0,0,1.417.109l6.1-3.206,6.1,3.206a1.454,1.454,0,0,0,.654.163,1.625,1.625,0,0,0,.817-.272,1.388,1.388,0,0,0,.545-1.3l-1.144-6.739,4.9-4.782a1.276,1.276,0,0,0,.327-1.359,1.354,1.354,0,0,0-1.09-.924l-6.812-.978-3.052-6.141a1.384,1.384,0,0,0-2.4,0l-3.052,6.141-6.812.978a1.355,1.355,0,0,0-1.09.924,1.36,1.36,0,0,0,.327,1.359Zm3.706-5.489a1.344,1.344,0,0,0,1.035-.761l2.125-4.348,2.125,4.348a1.646,1.646,0,0,0,1.035.761l4.8.707-3.488,3.369a1.4,1.4,0,0,0-.381,1.2l.817,4.782-4.305-2.228a1.286,1.286,0,0,0-1.253,0l-4.305,2.228.817-4.782a1.4,1.4,0,0,0-.381-1.2l-3.488-3.369Z"
                      transform="translate(0 0)" fill="#7d7e80" fill-rule="evenodd" />
                  </g>
                </svg>

              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="custom-container mt-5 mr-8 ml-8 pl-4 pr-1 pt-5 pb-5">
      <list-chart :data="listcourriers"></list-chart>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';

import ListChart from "@/components/statistiques/charts/ListChart";
import LeftMenu from "@/components/LeftMenu";


export default {
  layout: "dashboard",
  components: {

    LeftMenu,
    ListChart,
  },
computed: {
  ...mapState('filtres', ['listcourriers']),

},

  mounted: async function () {

    this.initiallistcourriers = [
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2022-06-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2022-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '64354ed846bf128b4c58e646',
        'createdAt': '2023-06-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6435542246bf128b4c58e647',
        'createdAt': '2023-05-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6478fa901b5abb021edeb08b',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6478fa901b5abb021edeb08b',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6478fa901b5abb021edeb08b',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6478fa901b5abb021edeb08b',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '6478fa901b5abb021edeb08b',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '123',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '123',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '123',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'traite'
      },
      {
        'structure': '456',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      },
      {
        'structure': '456',
        'createdAt': '2023-04-07T16:35:54.766Z',
        'traitement_status_slug': 'en-cours-de-traitement'
      }

    ]

   
  

    this.listannees = [
      { id: 2022, libelle_annee: 2022 },
      { id: 2023, libelle_annee: 2023 },
      { id: 2024, libelle_annee: 2024 },
      { id: 2025, libelle_annee: 2025 }
    ]
    // await this.$store.dispatch('organismes/getList')
    // await this.$store.dispatch('courriers/getList')
   
    this.nombreOrganismes = this.listorganismes.length
    this.nombreCourriers = this.initiallistcourriers.length
    const traitelist = await this.initiallistcourriers?.filter((item) => item.traitement_status_slug == "traite")
    this.nombreCourriersTraites = await traitelist?.length
    if (this.nombreCourriersTraites && this.nombreCourriers) {
      this.tauxDeReponse = ((this.nombreCourriersTraites / this.nombreCourriers) * 100).toFixed(0);
    }
    await this.updateListCourriers(this.initiallistcourriers);
  },

  data() {
    return {
    
      annee: '',
      listorganismes: [
        { id: '64354ed846bf128b4c58e646', intitule: 'MAEC' },
        { id: '123', intitule: 'ABC' },
        { id: '456', intitule: 'DEF' },
        { id: '6435542246bf128b4c58e647', intitule: 'MND' },
        { id: '6478fa901b5abb021edeb08b', intitule: 'MTFP' },
      ],
      listannees: [],
      nombreOrganismes: 0,
      tauxDeReponse: 0,
      nombreCourriers: 0,
      nombreCourriersTraites: 0,
      organisme: '',
    };
  },
  methods: {
    ...mapActions('filtres', ['updateListCourriers']),
 
    async changeAnnee(value) {
     
      console.log(value)
      this.updateCourrier(value, 'annee')

    },
    async changeOrganisme(value) {
      
      console.log(value)
      this.updateCourrier(value, 'organisme')
    },
    onClearClicked() {
      this.organisme = ''
      this.annee = ''
    },
    async updateCourrier(value, type) {
      var list = []

      if (type == 'organisme') {
        this.organisme = value
        if (this.annee != '') {
          list = this.initiallistcourriers.filter((item) => (this.getYearFromCreatedAt(item.createdAt) == this.annee && item.structure == value))
        } else {
          list = this.initiallistcourriers.filter((item) => (item.structure == value))
        }
      }


      if (type == 'annee') {
        this.annee = value
        if (this.organisme != '') {
          list = this.initiallistcourriers.filter((item) => (item.structure == this.organisme && this.getYearFromCreatedAt(item.createdAt) == value))
        } else {
          list = this.initiallistcourriers.filter((item) => this.getYearFromCreatedAt(item.createdAt) == value)
        }
      }
      console.log(list)
      await this.updateStat(list)
    },

    getYearFromCreatedAt(createdAt) {
      const date = new Date(createdAt)
      return date.getFullYear()
    },
    async updateStat(newlist) {
      await this.updateListCourriers(newlist);
  
  
      console.log('Change list ++++ ', newlist)
      this.nombreCourriers = await newlist?.length;
      const newtraitelist = await newlist?.filter((item) => item.traitement_status_slug == "traite")
      this.nombreCourriersTraites = await newtraitelist?.length
      if (this.nombreCourriers) {
        this.tauxDeReponse = ((this.nombreCourriersTraites / this.nombreCourriers) * 100).toFixed(0)
      }
      else {
        this.tauxDeReponse = 0
      }

    },
  },

}
</script>
  
<style scoped>
.custom-stat-boxes:hover .custom-icon-taux svg path {
  fill: #fff;
}

.custom-stat-boxes-bloc {
  display: flex;
  align-items: center;
  padding-top: 50px
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
}
</style>
  