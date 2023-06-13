export default {
    initlist(state, newlist) {
        state.listcourriers = newlist
    },
    initheader(state, newlist) {
        state.headercourriers = newlist
    },
    initdetail(state, newcourrier) {
        state.detailcourrier = newcourrier
    },
    removeItem(state,payload) {
        state.listcourriers = state.listcourriers.filter(item => item.id != payload)
    },

}