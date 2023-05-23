export default () => ({
    listmodelescourriers: [],

    headermodelescourriers : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Nom', value: 'name' },
        { text: 'Catégorie', value: 'categorie.name' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmodelecourrier :{}
})