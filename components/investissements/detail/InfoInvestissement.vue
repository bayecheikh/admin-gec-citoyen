<template>
  <div>
    <v-card class="custom-card-user border-grey">                   
    <v-card-text>
      <v-row>
        <v-col md="12" sm="12" lg="12" text-md-left>
          <div class="row">
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.annee && detailinvestissement.annee[0]">
                  <p class="info-profil"><span>Année : </span>{{detailinvestissement.annee[0].libelle}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.structure && detailinvestissement.structure[0]">
                  <p class="info-profil"><span>Structure d'enregistrement: </span>{{detailinvestissement.structure[0].nom_structure}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.region && detailinvestissement.region[0]">
                  <p class="info-profil"><span>Région : </span>{{detailinvestissement.region[0].nom_region}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.monnaie && detailinvestissement.monnaie[0]">
                  <p class="info-profil"><span>Monnaie : </span>{{detailinvestissement.monnaie[0].libelle}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.dimension && detailinvestissement.dimension[0]">
                  <p class="info-profil"><span>Dimension : </span>{{detailinvestissement.dimension[0].libelle_dimension}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.numero_agrement">
                  <p class="info-profil"><span>Numéro autorisation : </span>{{detailinvestissement.numero_agrement}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.telephone_investissement">
                  <p class="info-profil"><span>Téléphone : </span>{{detailinvestissement.telephone_investissement}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.email_investissement">
                  <p class="info-profil"><span>Email : </span>{{detailinvestissement.email_investissement}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.type_zone_interventions && detailinvestissement.type_zone_interventions[0]">
                  <p class="info-profil"><span>Zone d'intervention : </span>{{detailinvestissement.type_zone_interventions[0].libelle_zone}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.sourc && detailinvestissement.source[0]">
                  <p class="info-profil"><span>Source de financement : </span>{{detailinvestissement.source[0].libelle_source}}</p>
              </div>
              <div class="col-md-4 my-0 py-0" v-if="detailinvestissement.status">
                  <p class="info-profil"><span>Status: </span>
                    <v-chip
                      :color="(detailinvestissement.status=='a_valider' && 'primary') || (detailinvestissement.status=='rejete' && 'error') || (detailinvestissement.status=='brouillon' && 'orange') || (detailinvestissement.status=='publie' && 'green')"
                      small
                      outlined
                      class="my-1 mr-1"
                    >
                      {{ (detailinvestissement.status=='a_valider' && 'A valider') || (detailinvestissement.status=='rejete' && 'Rejeté') || (detailinvestissement.status=='brouillon' && 'Brouillon') || (detailinvestissement.status=='publie' && 'Publié')}}
                    </v-chip>
                  </p>
                  <p class="info-profil" v-if="detailinvestissement.status=='rejete'"><span>Motif du rejet : </span>{{detailinvestissement.motif_rejet}}</p>
              </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card class="custom-card-user border-grey my-2">                   
    <v-card-text>
      <v-row>
        <v-col md="12" sm="12" lg="12" text-md-left>
          <template v-if="detailinvestissement && detailinvestissement.ligne_financements && detailinvestissement.ligne_financements.length">
          <v-simple-table class="custom-ligne-bloc-2">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Année
                  </th>
                  <th class="text-left">
                    Monnaie
                  </th>
                  <th class="text-left">
                    Dimension
                  </th>
                  <th class="text-left">
                    Région
                  </th>
                  <th class="text-left" >
                    Bénéficiaire
                  </th>
                  <th class="text-left" >
                    Bailleur
                  </th>
                  <th class="text-left" >
                    Type Structure Source
                  </th>
                  <th class="text-left">
                    Pilier
                  </th>
                  <th class="text-left">
                    Axe
                  </th>
                  <th class="text-left">
                    Montant Biens et services prévu
                  </th>
                  <th class="text-left">
                    Montant Biens et services mobilisé
                  </th>
                  <th class="text-left">
                    Montant Biens et services executé
                  </th>
                  <th class="text-left">
                    Montant Investissement prévu
                  </th>
                  <th class="text-left">
                    Montant Investissement mobilisé
                  </th>
                  <th class="text-left">
                    Montant Investissement executé
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item) in LigneFinancementInputs"
                  :key="item.id"
                >
                  <td>{{item.annee?item.annee.libelle:findAnneeName(item.id_annee) && findAnneeName(item.id_annee).libelle }}</td>
                  <td>{{item.monnaie?item.monnaie.libelle:findMonnaieName(item.id_monnaie) && findMonnaieName(item.id_monnaie).libelle }}</td>
                  <td>{{item.dimension?item.dimension.libelle_dimension:findDimensionName(item.id_dimension) && findDimensionName(item.id_dimension).libelle_dimension }}</td>
                  <td>{{item.region?item.region.nom_region:findRegionName(item.id_region) && findRegionName(item.id_region).nom_region }}</td>
                  <td>{{item.structure_beneficiaire?item.structure_beneficiaire.nom_structure:findStructureName(item.id_structure_beneficiaire) && findStructureName(item.id_structure_beneficiaire).nom_structure }}</td>
                  <td >{{item.structure_source?item.structure_source.nom_structure:findStructureName(item.id_structure_source) && findStructureName(item.id_structure_source).nom_structure }}</td>            
                  <td >{{item.type_structure_source?item.type_structure_source.libelle_source:findTypeStructureName(item.id_type_structure_source) && findTypeStructureName(item.id_type_structure_source).libelle_source }}</td>            
                  <td>{{item.pilier?item.pilier.nom_pilier:findPilierName(item.id_pilier) && findPilierName(item.id_pilier).nom_pilier }}</td>
                  <td>{{item.pilier?item.axe.nom_axe:findAxeName(item.id_pilier,item.id_axe) && findAxeName(item.id_pilier,item.id_axe).nom_axe}}</td>
                  <td>{{item.montantBienServicePrevus}}</td>
                  <td>{{item.montantBienServiceMobilises}}</td>
                  <td>{{item.montantBienServiceExecutes}}</td>
                  <td>{{item.montantInvestissementPrevus}}</td>
                  <td>{{item.montantInvestissementMobilises}}</td>
                  <td>{{item.montantInvestissementExecutes}}</td>
                  
                  
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <!--<v-card class="custom-card-user border-grey my-2">                   
    <v-card-text>
      <v-row>
        <v-col md="12" sm="12" lg="12" text-md-left>
          <div class="row">
            <div class="col-md-4 border-left">
                <h2 class="info-profil mb-4">Pièces jointes</h2>
                <div class="filename d-flex justify-content-between" v-for="(item,i) in detailinvestissement && detailinvestissement.fichiers " :key="i">
                  <v-icon>mdi-file-document-outline</v-icon><a :href="apiUrl+'/'+item.url" target="_blanc">{{item.name}}</a>
                </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>-->
  </div>
 
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
  export default {
    mounted: function() {

      this.getDetail(this.id)
    },
    computed: mapGetters({
      detailUtilisateur: 'utilisateurs/detailutilisateur',
      detailinvestissement:'investissements/detailinvestissement',
      listannees: 'annees/listannees',
      listmonnaies: 'monnaies/listmonnaies',
      listdimensions: 'dimensions/listdimensions',
      listregions: 'regions/listregions',
      listmodefinancements: 'modefinancements/listmodefinancements',
      listpiliers: 'piliers/listpiliers',
      listbailleurs: 'bailleurs/listbailleurs',
      liststructures: 'structures/selectliststructures',
      listsources: 'sources/listsources',
    }),
    data () {
      return {
        id : this.$nuxt._route.params.id,
        apiUrl : process.env.baseUrl,
        LigneFinancementInputs:[],
      }
    },
    methods: {
      getDetail(id){
          this.progress=true
          this.$msasApi.$get('/investissements/'+id)
        .then(async (response) => {
          this.LigneFinancementInputs = JSON.parse(JSON.stringify(response.data.ligne_financements))
            console.log('Detail ++++++++++',response)
            this.$store.dispatch('investissements/getDetail',response.data)
        }).catch((error) => {
             this.$toast.error(error?.response?.data?.message).goAway(3000)
            console.log('Code error ++++++: ', error?.response?.data?.message)
        }).finally(() => {
            console.log('Requette envoyé ')
        });
        //console.log('total items++++++++++',this.paginationinvestissement)
      },
      submitForm(){
        alert('Formulaire soumis')
      },
      retour(){       
          this.$router.push('/investissements');
      },
      findAnneeName (id) {
        return this.listannees.filter(item => item.id === parseInt(id))[0]
      },
      findMonnaieName (id) {
        return this.listmonnaies.filter(item => item.id === parseInt(id))[0]
      },
      findDimensionName (id) {
        return this.listdimensions.filter(item => item.id === parseInt(id))[0]
      },
      findStructureName (id) {
        return this.liststructures.filter(item => item.id === parseInt(id))[0]
      },
      findTypeStructureName (id) {
        return this.listsources.filter(item => item.id === parseInt(id))[0]
      },
      findRegionName (id) {
        return this.listregions.filter(item => item.id === parseInt(id))[0]
      },
      findPilierName (id) {
        return this.listpiliers.filter(item => item.id === parseInt(id))[0]
      },
      findAxeName (id_pilier,id_axe) {
        return this.listpiliers.filter(item => item.id === parseInt(id_pilier))[0]?.axes.filter(item => item.id === parseInt(id_axe))[0]
      },
    },
  }
</script>
