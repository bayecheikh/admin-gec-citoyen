export default () => ({
    listfaqcategories: [],

    headerfaqcategories : [
        {
            text: 'Libelle',
            align: 'start',
            sortable: true,
            value: 'libelle',
        },
        { text: 'Slug', value: 'slug' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailfaqcategorie :{}
})