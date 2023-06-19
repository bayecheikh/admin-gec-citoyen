export default () => ({
    listcontenusdynamiques: [],

    headercontenusdynamiques : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
        { text: 'Titre', value: 'title' },
        { text: 'Catégorie', value: 'categorie.libelle' },
        // { text: 'Description', value: 'resume' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailcontenudynamique :{}
})