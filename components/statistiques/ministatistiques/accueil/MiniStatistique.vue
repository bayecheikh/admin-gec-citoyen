<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
        <nbr-utilisateur></nbr-utilisateur>
        <nbr-demande-acte></nbr-demande-acte>
        <nbr-payement-total></nbr-payement-total>
        <nbr-dossier-delivre></nbr-dossier-delivre>
    </v-layout>
  </v-container>
</template>

<script>
import NbrUtilisateur from '@/components/statistiques/ministatistiques/accueil/NbrUtilisateur';
import NbrDemandeActe from '@/components/statistiques/ministatistiques/accueil/NbrDemandeActe';
import NbrPayementTotal from '@/components/statistiques/ministatistiques/accueil/NbrPayementTotal';
import NbrDossierDelivre from '@/components/statistiques/ministatistiques/accueil/NbrDossierDelivre';
export default {
  components: {
      NbrUtilisateur,
      NbrDemandeActe,
      NbrPayementTotal,
      NbrDossierDelivre
    }
};
</script>
