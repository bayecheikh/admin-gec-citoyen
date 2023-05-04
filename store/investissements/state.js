export default () => ({
    listinvestissements: [],

    headerinvestissements : [
        { text: 'Année', value: 'annee' },
        { text: 'Monnaie', value: 'monnaie'},
        /* { text: 'Région', value: 'region'}, */
        { text: 'Dimension', value: 'dimension'},
        { text: 'Structure', value: 'structure'},
        { text: 'Source de financement', value: 'source'},
        { text: 'Statut', value: 'status'},
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    headerinvestissementavances : [
        { text: 'Année', value: 'annee' },
        { text: 'Monnaie', value: 'monnaie'},
        /* { text: 'Région', value: 'region'}, */
        { text: 'Dimension', value: 'dimension'},
        { text: 'Structure', value: 'structure'},
        { text: 'Source de financement', value: 'source'},
        { text: 'Dimension', value: 'dimension'},
        { text: 'Pilier', value: 'piliers'},
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailinvestissement :{},
    //Intialise la pagination
    paginationinvestissement :{},
    totalPage :1,
    perPage :15,
    currentPage :1,
    dataSearch :null
})