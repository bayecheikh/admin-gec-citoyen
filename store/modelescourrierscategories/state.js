export default () => ({
    listmodelescourrierscategories: [],

    headermodelescourrierscategories : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        },
        { text: 'Slug', value: 'slug' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmodelecourriercategorie :{}
})