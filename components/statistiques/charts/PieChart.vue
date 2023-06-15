<script>
import { Pie } from 'vue-chartjs';
import { mapGetters, mapState } from 'vuex'
export default {
  extends: Pie,
  computed: {
    // ...mapState('filtresannees', ['listcourriersannee']),
    ...mapGetters({
      listorganismes: 'organismes/listorganismes',
      listcourrierspie: 'courriers/listcourrierspie'
    }),

  },
  methods:{
async initializeChart(){
  this.pourcentageCourriersParOrganisme = [];
      this.intitulesOrganismes = [];
      this.organismesPourcentageCourriers = []
    
  // this.listorganismes = [
  //     {id: '64354ed846bf128b4c58e646', intitule:'MAEC'},
  //     {id: '123', intitule:'MJL'},
  //     {id: '456', intitule:'MISP'},
  //     {id: '6435542246bf128b4c58e647', intitule:'MND'},
  //     {id: '6478fa901b5abb021edeb08b', intitule:'MTFP'},
  //   ]

  console.log("LIST COURRIERS PIE", this.listcourrierspie)
    this.nombreTotalCourriers = this.listcourrierspie.length;
   console.log("Nombre total courriers",   this.nombreTotalCourriers )
if( this.nombreTotalCourriers!=0){
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

   console.log("Nouveau pourcentage", this.pourcentageCourriersParOrganisme)
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
   this.renderChart(this.repartitionParOrganismeData, this.pieChartOptions);
  }
  else{
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

  this.renderChart(this.repartitionParOrganismeData, this.pieChartOptions);

  }
   
  }
  },
  mounted: async function () {

    await this.$store.dispatch('organismes/getList')
    await this.$store.dispatch('courriers/getList')
   
  
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
      repartitionParOrganismeData: {

      },
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
