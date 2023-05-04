export default () => ({
    listaxes: [],

    headeraxes : [
        {
            text: 'Libelle',
            align: 'start',
            sortable: true,
            value: 'nom_axe',
        },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailaxe :{}
})