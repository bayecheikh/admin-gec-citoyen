export default () => ({
    listroles: [],
    selectListRoles: [],

    headerroles : [
       /*  {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Description', value: 'description' },
        { text: 'Permissions', value: 'permissions',sortable: false },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailrole :{}
})