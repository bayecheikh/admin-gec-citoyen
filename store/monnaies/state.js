export default () => ({
    listmonnaies: [],

    headermonnaies : [
        {
            text: 'Année',
            align: 'start',
            sortable: true,
            value: 'libelle',
        },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmonnaie :{}
})