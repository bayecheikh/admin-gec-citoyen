<script>
import { Bar } from "vue-chartjs";
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('filtres', ['listcourriers']),

  },

  extends: Bar,
  methods: {
    async initializeChart() {
      console.log("EXEC++++")
      this.courriersParMois = [];
      this.intitulesMois = [];
      this.courriersMensuels = [];


      for (let i = 0; i < 12; i++) {

        this.nombreTotalCourriers = this.listcourriers.length
        const totalCourriersMensuels = await this.listcourriers.filter(courrier => {
          const courrierMonth = new Date(courrier.createdAt).getMonth();
          return courrierMonth === i;
        })

        const nombreCourriersMensuels = await totalCourriersMensuels.length
        const moisItem = await this.mois.find(item => item.id === i);

        this.courriersParMois.push({
          mois: moisItem.libelle,
          courriers: nombreCourriersMensuels
        });

      }


      for (let i = 0; i < this.courriersParMois.length; i++) {
        const courrier = this.courriersParMois[i];
        this.intitulesMois.push(courrier.mois);
        this.courriersMensuels.push(courrier.courriers);
      }
      let maxCourriers = 0;
      for (let i = 0; i < this.courriersMensuels.length; i++) {
        if (this.courriersMensuels[i] > maxCourriers) {
          maxCourriers = this.courriersMensuels[i];
          this.moisAvecPlusCourriers = i;
        }
      }

      this.barChartOptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 12
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true,
          position: 'bottom',
          align: "start"
        },
        responsive: true,
        maintainAspectRatio: false
      },

        console.log("RPD++++++++++++", this.intitulesMois)
      console.log("MOIS++++++++++++", this.courriersMensuels)
      this.repartitionMensuelleData = {
        labels: this.intitulesMois,
        datasets: [{
          label: 'Nombre de courriers',
          borderWidth: 1,
          backgroundColor: this.courriersMensuels.map((courriers, i) =>
            courriers < 10 ? '#999999' : (i === this.moisAvecPlusCourriers ? '#008064' : '#0a3764')
          ),
          data: this.courriersMensuels
        }]
      };
      this.renderChart(this.repartitionMensuelleData, this.barChartOptions);
    }
  },
  mounted: async function () {

    this.mois = [
      { id: 0, libelle: "Janv" },
      { id: 1, libelle: "Fev" },
      { id: 2, libelle: "Mars" },
      { id: 3, libelle: "Avril" },
      { id: 4, libelle: "Mai" },
      { id: 5, libelle: "Juin" },
      { id: 6, libelle: "Juil" },
      { id: 7, libelle: "Août" },
      { id: 8, libelle: "Sept" },
      { id: 9, libelle: "Oct" },
      { id: 10, libelle: "Nov" },
      { id: 11, libelle: "Dec" }
    ]


  },
  watch: {
    listcourriers: {
      immediate: false, // Exécuter le watcher immédiatement lors du montage du composant
      handler() {
        this.initializeChart();
      },
    },
  },
  data() {
    return {
      courriersParMois: [],
      moisAvecPlusCourriers: null,
      mois: [],

      repartitionMensuelleData: {

      },
      intitulesOrganismes: [],
      intitulesMois: [],
      courriersParOrganisme: [],
      courriersMensuels: [],
      organismeData: {

      },

    }
  },


};
</script>