export default () => ({
    listannees: [
        { id: 2022, libelle_annee: 2022 },
        { id: 2023, libelle_annee: 2023 },
      
      ],

    headerannees : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
       
        { text: 'Annee', value: 'libelle_annee' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailannee :{}
})