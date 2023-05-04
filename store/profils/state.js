export default () => ({
    listprofils: [],
    selectListprofils: [],
    headerprofils : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        },
        { text: 'Description', value: 'description' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailprofil :{}
})