export default {
    initlist(state, newlist) {
        state.listaxes = newlist
    },
    initheader(state, newlist) {
        state.headeraxes = newlist
    },
    initdetail(state, newaxe) {
        state.detailaxe = newaxe
    },
    removeItem(state,payload) {
        state.listaxes = state.listaxes.filter(item => item.id != payload)
    }
}