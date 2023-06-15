export default {
    initlist(state, newlist) {
        state.listannees = newlist
    },
    initheader(state, newlist) {
        state.headerannees = newlist
    },
    initdetail(state, newannee) {
        state.detailannee = newannee
    },
    removeItem(state,payload) {
        state.listannees = state.listannees.filter(item => item.id != payload)
    }
}