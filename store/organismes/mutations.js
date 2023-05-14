export default {
    initlist(state, newlist) {
        state.listorganismes = newlist
    },
    initheader(state, newlist) {
        state.headerorganismes = newlist
    },
    initdetail(state, neworganisme) {
        state.detailorganisme = neworganisme
    },
    removeItem(state,payload) {
        state.listorganismes = state.listorganismes.filter(item => item.id != payload)
    }
}