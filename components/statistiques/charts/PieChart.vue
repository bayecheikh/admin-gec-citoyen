<script>
import { Pie } from 'vue-chartjs';
import { mapGetters } from 'vuex'
export default {
  extends: Pie,
  computed: {
    ...mapGetters({
      listorganismes: 'organismes/listorganismes',
      listcourrierspie: 'courriers/listcourrierspie',
    }),
  },
  methods: {
    async initializeChart() {
      this.pourcentageCourriersParOrganisme = [];
      this.intitulesOrganismes = [];
      this.organismesPourcentageCourriers = []
      this.nombreTotalCourriers = this.listcourrierspie.length;
      if (this.nombreTotalCourriers != 0) {
        for (let i = 0; i < this.listorganismes.length; i++) {
          let courriersOrganisme = await this.listcourrierspie.filter((item) => item.structure == this.listorganismes[i].id);
          let nombreCourriersOrganisme = parseFloat(courriersOrganisme.length);
          let pourcentageCourriers = ((nombreCourriersOrganisme / this.nombreTotalCourriers) * 100).toFixed(2);
          this.organismesPourcentageCourriers.push({
            intitule: this.listorganismes[i].intitule,
            pourcentage: pourcentageCourriers
          });
        }
        this.organismesPourcentageCourriers.sort((a, b) => b.pourcentage - a.pourcentage);
        for (let i = 0; i < this.organismesPourcentageCourriers.length; i++) {
          let organisme = this.organismesPourcentageCourriers[i];
          this.intitulesOrganismes.push(organisme.intitule);
          this.pourcentageCourriersParOrganisme.push(parseFloat(organisme.pourcentage));
        }
        let troisPremiersPourcentages = this.pourcentageCourriersParOrganisme.slice(0, 3);
        let somme = troisPremiersPourcentages.reduce((acc, pourcentage) => acc + pourcentage, 0);
        const sommePourcentagesRestants = parseFloat((100 - somme).toFixed(2))
        this.pourcentageCourriersParOrganisme = [...troisPremiersPourcentages, sommePourcentagesRestants];
        let troisPremiersOrganismes = this.intitulesOrganismes.slice(0, 3);
        this.intitulesOrganismes = [...troisPremiersOrganismes, 'Autres'];
        this.pieChartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'bottom',
            align: 'start'
          }
        },
          this.repartitionParOrganismeData = {
            labels: this.intitulesOrganismes,
            datasets: [{
              label: 'Nombre de courriers',
              borderWidth: 1,
              backgroundColor: ['#008064', '#0a3764', '#FFCE56', '#999999'],
              data: this.pourcentageCourriersParOrganisme
            }
            ]
          }
        await this.$store.dispatch('courriers/updateIsPieLoading', false)
        await this.renderChart(this.repartitionParOrganismeData, this.pieChartOptions);
        return
      }
      else {
        this.intitulesOrganismes = ["Aucun courrier"];
        this.pourcentageCourriersParOrganisme = [100];
        this.pieChartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'bottom',
            align: 'start'
          }
        };
        this.repartitionParOrganismeData = {
          labels: this.intitulesOrganismes,
          datasets: [{
            label: 'Nombre de courriers',
            borderWidth: 1,
            backgroundColor: ['#999999'],
            data: this.pourcentageCourriersParOrganisme
          }]
        };
        await this.$store.dispatch('courriers/updateIsPieLoading', false)
        await this.renderChart(this.repartitionParOrganismeData, this.pieChartOptions);
      }
    }
  },
  mounted: async function () {
    this.initializeChart();
  },
  watch: {
    listcourrierspie: {
      immediate: false,
      handler() {
        this.initializeChart();
      },
    },
  },
  data() {
    return {
      organismesPourcentageCourriers: [],
      repartitionParOrganismeData: {},
      pourcentageCourriersParOrganisme: [],
      intitulesOrganismes: [],
      courriersParOrganisme: [],
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
          align: 'start'
        }
      },
    }
  },
};
</script>
