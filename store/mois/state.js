export default () => ({
    listmois: [
        { id: 0, libelle: "Janv" },
        { id: 1, libelle: "Fev" },
        { id: 2, libelle: "Mars" },
        { id: 3, libelle: "Avril" },
        { id: 4, libelle: "Mai" },
        { id: 5, libelle: "Juin" },
        { id: 6, libelle: "Juil" },
        { id: 7, libelle: "Août" },
        { id: 8, libelle: "Sept" },
        { id: 9, libelle: "Oct" },
        { id: 10, libelle: "Nov" },
        { id: 11, libelle: "Dec" }
      ],

    headermois : [
        /* {
            text: 'Nom',
            align: 'start',
            sortable: true,
            value: 'name',
        }, */
       
        { text: 'mois', value: 'libelle' },
        { text: 'Actions', value: 'actions', sortable: false },
    ],
    detailmois :{}
})