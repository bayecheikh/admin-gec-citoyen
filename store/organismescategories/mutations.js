export default {
    initlist(state, newlist) {
        state.listorganismescategories = newlist
    },
    initheader(state, newlist) {
        state.headerorganismescategories = newlist
    },
    initdetail(state, neworganismecategorie) {
        state.detailorganismecategorie = neworganismecategorie
    },
    removeItem(state,payload) {
        state.listorganismescategories = state.listorganismescategories.filter(item => item.id != payload)
    }
}