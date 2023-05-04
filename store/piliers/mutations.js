export default {
    initlist(state, newlist) {
        state.listpiliers = newlist
    },
    initheader(state, newlist) {
        state.headerpiliers = newlist
    },
    initdetail(state, newpilier) {
        state.detailpilier = newpilier
    },
    removeItem(state,payload) {
        state.listpiliers = state.listpiliers.filter(item => item.id != payload)
    }
}