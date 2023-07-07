<script>
import { Bar } from "vue-chartjs";
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      listorganismes: 'organismes/listorganismes',
      listcourriers: 'courriers/listcourriers',
      listmois: 'mois/listmois'
    }),
  },
  extends: Bar,
  methods: {
    async initializeChart() {
      if (this.listcourriers?.length === 0) {
        // La liste des courriers est vide, afficher "Aucun courrier" dans le diagramme en barres
        this.intitulesMois = ["Aucun courrier"];
        this.courriersMensuels = [0];
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
        };

        this.repartitionMensuelleData = {
          labels: this.intitulesMois,
          datasets: [{
            label: 'Aucun courrier',
            borderWidth: 1,
            backgroundColor: ['#999999'],
            data: this.courriersMensuels
          }]
        };
        await this.renderChart(this.repartitionMensuelleData, this.barChartOptions);
        return;
      }
     
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
        const moisItem = await this.listmois.find(item => item.id === i);
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
      this.repartitionMensuelleData = {
        labels: this.intitulesMois,
        datasets: [{
          label: 'Nombre de courriers',
          borderWidth: 1,
          backgroundColor: this.courriersMensuels.map((courriers, i) =>
            (i === this.moisAvecPlusCourriers ? '#008064' : '#008064')
          ),
          data: this.courriersMensuels
        }]
      };
      await this.renderChart(this.repartitionMensuelleData, this.barChartOptions);
      return
    }
  },
  mounted: async function () {
    this.initializeChart();
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
      repartitionMensuelleData: {},
      intitulesMois: [],
      courriersMensuels: [],
    }
  },


};
</script>