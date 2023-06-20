export default () => ({
    listorganismes: [],

    headerorganismes : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Organismes', value: 'description' },
        { text: 'Type', value: 'typeStructure.name' },
        { text: 'Statut', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailorganisme : ''
})