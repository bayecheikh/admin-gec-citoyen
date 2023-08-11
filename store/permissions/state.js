export default () => ({
    listpermissions: [],

    headerpermissions : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Nom', value: 'name' },
        { text: 'Description', value: 'description' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailpermission :{}
})