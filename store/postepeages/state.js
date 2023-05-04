export default () => ({
    listpostepeages: [],

    headerpostepeages : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Titre', value: 'titre' },
        { text: 'Latitude', value: 'latitude' },
        { text: 'Longitude', value: 'longitude' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailpostepeage :{}
})