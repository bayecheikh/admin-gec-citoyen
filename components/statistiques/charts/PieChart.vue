<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,

  mounted: async function (){
       

    this.listcourriers = [
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '64354ed846bf128b4c58e646',
          'createdAt' : '2023-06-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6435542246bf128b4c58e647',
          'createdAt' : '2023-05-07T16:35:54.766Z'
        },
        {
          'structure' : '6478fa901b5abb021edeb08b',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '6478fa901b5abb021edeb08b',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '6478fa901b5abb021edeb08b',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '6478fa901b5abb021edeb08b',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '6478fa901b5abb021edeb08b',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '123',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '123',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '123',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '456',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        },
        {
          'structure' : '456',
          'createdAt' : '2023-04-07T16:35:54.766Z'
        }
        
      ]
      this.listorganismes = [
        {id: '64354ed846bf128b4c58e646', intitule:'MAEC'},
        {id: '123', intitule:'ABC'},
        {id: '456', intitule:'DEF'},
        {id: '6435542246bf128b4c58e647', intitule:'MND'},
        {id: '6478fa901b5abb021edeb08b', intitule:'MTFP'},
      ]
    this.nombreTotalCourriers = this.listcourriers.length
    // Parcourez chaque organisme dans la liste
    // for (let i = 0; i < this.listorganismes.length; i++) {
    //   // Ajoutez la description de l'organisme au tableau des descriptions
    //   this.intitulesOrganismes.push(this.listorganismes[i].intitule);
    //   console.log("BOUCLE FOR ORGANISME", i)
    //   console.log("intitule", this.listorganismes[i].intitule)
    //   const courriersOrganisme = await this.listcourriers.filter((item) => item.structure == this.listorganismes[i].id)
    //   const nombreCourriersOrganisme = await courriersOrganisme.length
    //   const pourcentageCourriers = parseFloat(((nombreCourriersOrganisme / this.nombreTotalCourriers) * 100).toFixed(2))
    //   this.pourcentageCourriersParOrganisme.push(pourcentageCourriers);
    // }

    for (let i = 0; i < this.listorganismes.length; i++) {
      const courriersOrganisme = await this.listcourriers.filter((item) => item.structure == this.listorganismes[i].id);
      const nombreCourriersOrganisme = courriersOrganisme.length;
      const pourcentageCourriers = parseFloat(((nombreCourriersOrganisme / this.nombreTotalCourriers) * 100).toFixed(2));

      this.organismesPourcentageCourriers.push({
        intitule: this.listorganismes[i].intitule,
        pourcentage: pourcentageCourriers
      });
}
this.organismesPourcentageCourriers.sort((a, b) => b.pourcentage - a.pourcentage);

for (let i = 0; i < this.organismesPourcentageCourriers.length; i++) {
  const organisme = this.organismesPourcentageCourriers[i];
  this.intitulesOrganismes.push(organisme.intitule);
  this.pourcentageCourriersParOrganisme.push(organisme.pourcentage);
}
const troisPremiersPourcentages = this.pourcentageCourriersParOrganisme.slice(0, 3);
const sommePourcentagesRestants = parseFloat((this.pourcentageCourriersParOrganisme.slice(3).reduce((a, b) => a + b, 0)).toFixed(2));
this.pourcentageCourriersParOrganisme = [...troisPremiersPourcentages, sommePourcentagesRestants];
const troisPremiersOrganismes = this.intitulesOrganismes.slice(0, 3);
 this.intitulesOrganismes = [...troisPremiersOrganismes, 'Autres'];
// this.organismesPourcentageCourriers.sort((a, b) => b.pourcentage - a.pourcentage);

// // Convertir les pourcentages en nombres
// const pourcentages = this.pourcentageCourriersParOrganisme.map(pourcentage => parseFloat(pourcentage));

// // Trier le tableau des pourcentages de façon décroissante
// pourcentages.sort((a, b) => b - a);

// // Conserver les trois premiers pourcentages
// const troisPremiersPourcentages = pourcentages.slice(0, 3);

// // Faire la somme des pourcentages restants
// const sommePourcentagesRestants = parseFloat((pourcentages.slice(3).reduce((a, b) => a + b, 0)).toFixed(2));

// // Réinitialiser le tableau pourcentageCourriersParOrganisme avec les trois premiers pourcentages et la somme
// this.pourcentageCourriersParOrganisme = [...troisPremiersPourcentages, sommePourcentagesRestants];
// const troisPremiersOrganismes = this.intitulesOrganismes.slice(0, 3);
// this.intitulesOrganismes = [...troisPremiersOrganismes, 'Autres'];


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
  },
  data() {
    return {
      organismesPourcentageCourriers: [],
      repartitionParOrganismeData: {
   
    },
    pourcentageCourriersParOrganisme : [],
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
