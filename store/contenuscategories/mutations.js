export default {
    initlist(state, newlist) {
        state.listcontenuscategories = newlist
    },
    initheader(state, newlist) {
        state.headercontenuscategories = newlist
    },
    initdetail(state, newcontenucategorie) {
        state.detailcontenucategorie = newcontenucategorie
    },
    removeItem(state,payload) {
        state.listcontenuscategories = state.listcontenuscategories.filter(item => item.id != payload)
    }
}