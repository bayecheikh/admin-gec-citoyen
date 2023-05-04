export default () => ({
    liststructures: [],
    selectliststructures: [],

    headerstructures : [
        /* {
            text: 'Username',
            align: 'start',
            sortable: true,
            value: 'username',
        }, */
        /* { text: 'Prénom', value: 'firstname' },
        { text: 'Nom', value: 'lastname' }, */
        { text: 'Nom', value: 'nom_structure' },
        { text: 'Source de financement', value: 'source_financements'},
        { text: 'Type', value: 'type_sources'},
        { text: 'Téléphone', value: 'telephone_structure'},
        { text: 'Email', value: 'email_structure'},
        /* { text: 'Telephone', value: 'telephone' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailstructure :{},
    //Intialise la pagination
    paginationStructure :{},
    totalPage :1,
    perPage :15,
    currentPage :1,
    dataSearch :null
})