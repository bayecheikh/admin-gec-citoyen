export default {
    initlist(state, newlist) {
        state.listmodefinancements = newlist
    },
    initheader(state, newlist) {
        state.headermodefinancements = newlist
    },
    initdetail(state, newmodefinancement) {
        state.detailmodefinancement = newmodefinancement
    },
    removeItem(state,payload) {
        state.listmodefinancements = state.listmodefinancements.filter(item => item.id != payload)
    }
}