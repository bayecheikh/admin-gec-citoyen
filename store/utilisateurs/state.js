export default () => ({
    listutilisateurs: [],

    headerutilisateurs : [
        /* {
            text: 'Username',
            align: 'start',
            sortable: true,
            value: 'username',
        }, */
        /* { text: 'Prénom', value: 'firstname' },
        { text: 'Nom', value: 'lastname' }, */
        { text: 'Prénom et Nom', value: 'name' },
        { text: 'Email', value: 'email' },
        /* { text: 'Téléphone', value: 'telephone' }, */
        { text: 'Rôles', value: 'roles' },
        { text: 'Statut', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailutilisateur :{},
    //Intialise la pagination
    paginationUtilisateur :{},
    totalPage :1,
    perPage :15,
    currentPage :1,
    dataSearch :null
})