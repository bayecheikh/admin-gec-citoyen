export default () => ({
    listcontenuscategories: [],

    headercontenuscategories : [
        {
            text: 'Libelle',
            align: 'start',
            sortable: true,
            value: 'libelle',
        },
        { text: 'Slug', value: 'slug' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcontenucategorie :{}
})