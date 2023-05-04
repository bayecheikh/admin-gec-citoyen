export default {
    initlist(state, newlist) {
        state.listmonnaies = newlist
    },
    initheader(state, newlist) {
        state.headermonnaies = newlist
    },
    initdetail(state, newmonnaie) {
        state.detailmonnaie = newmonnaie
    },
    removeItem(state,payload) {
        state.listmonnaies = state.listmonnaies.filter(item => item.id != payload)
    }
}