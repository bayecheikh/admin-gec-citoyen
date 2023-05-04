export default {
    initlist(state, newlist) {
        state.listpostepeages = newlist
    },
    initheader(state, newlist) {
        state.headerpostepeages = newlist
    },
    initdetail(state, newpostepeage) {
        state.detailpostepeage = newpostepeage
    },
    removeItem(state,payload) {
        state.listpostepeages = state.listpostepeages.filter(item => item.id != payload)
    }
}