export default {
    initlist(state, newlist) {
        state.listmois = newlist
    },
    initheader(state, newlist) {
        state.headermois = newlist
    },
    initdetail(state, newmois) {
        state.detailmois = newmois
    },
    removeItem(state,payload) {
        state.listmois = state.listmois.filter(item => item.id != payload)
    }
}