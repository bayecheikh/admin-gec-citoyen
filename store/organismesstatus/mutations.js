export default {
    initlist(state, newlist) {
        state.listorganismesstatus = newlist
    },
    initheader(state, newlist) {
        state.headerorganismesstatus = newlist
    },
    initdetail(state, neworganismestatus) {
        state.detailorganismestatus = neworganismestatus
    },
    removeItem(state,payload) {
        state.listorganismesstatus = state.listorganismesstatus.filter(item => item.id != payload)
    }
}