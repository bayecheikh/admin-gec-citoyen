export default () => ({
    listtypelignes: [],

    headertypelignes : [
        {
            text: 'Libelle',
            align: 'start',
            sortable: true,
            value: 'libelle',
        },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailtypeligne :{}
})