export default {
    initlist(state, newlist) {
        state.listcontenusdynamiques = newlist
    },
    initheader(state, newlist) {
        state.headercontenusdynamiques = newlist
    },
    initdetail(state, newcontenudynamique) {
        state.detailcontenudynamique = newcontenudynamique
    },
    removeItem(state,payload) {
        state.listcontenusdynamiques = state.listcontenusdynamiques.filter(item => item.id != payload)
    }
}