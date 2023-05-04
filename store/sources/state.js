export default () => ({
    listsources: [],
    selectListsources: [],

    headersources : [
        {
            text: 'Libelle',
            align: 'start',
            sortable: true,
            value: 'libelle_source',
        },
        { text: 'Types sources', value: 'type_sources',sortable: false },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailsource :{}
})