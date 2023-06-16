export default () => ({
    listcourriers: [],
    listcourrierspie: [],
    initiallistcourriers: [],
    listcourrierstraites: [],
    ispieloading: true,
    isbarloading: true,

    headercourriers : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'courriers', value: 'description' },

        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcourrier :{}
})