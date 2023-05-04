export default () => ({
    listdepartements: [],

    headerdepartements : [
        {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'nom_departement',
        },
        { text: 'Slug', value: 'slug' },
        { text: 'Latitude', value: 'latitude' },
        { text: 'Longitude', value: 'longitude' },
        /* { text: 'Status', value: 'status' }, */
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detaildepartement :{}
})