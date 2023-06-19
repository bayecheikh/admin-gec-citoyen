export default () => ({
    listorganismesstatus: [
        {id:0, name:'Inactif'},
        {id:1, name:'Actif'}
      ],

    headerorganismesstatus : [
        {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
        },
        { text: 'Name', value: 'name' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailorganismestatus :{}
})