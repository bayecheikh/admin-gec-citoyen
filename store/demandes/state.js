export default () => ({
    listdemandes: [],
    selectListDemandes: [],
    headerdemandes : [
        { text: 'Prénom', value: 'firstname' },
        { text: 'Nom', value: 'lastname' },
        /* { text: 'Profil', value: 'profil' }, */
        { text: 'Email', value: 'email' },
        { text: 'Telephone', value: 'telephone' },
        { text: 'Sujet', value: 'subject' },
        { text: 'Message', value: 'message' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detaildemande :{},
    paginationinvestissement :{},
    totalPage :1,
    perPage :15,
    currentPage :1,
    dataSearch :null
})