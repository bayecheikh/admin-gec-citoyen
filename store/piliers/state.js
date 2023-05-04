export default () => ({
    listpiliers: [],

    headerpiliers : [
        {
            text: 'Libelle',
            align: 'start',
            sortable: true,
            value: 'nom_pilier',
        },
        { text: 'Axes', value: 'axes',sortable: false },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailpilier :{}
})