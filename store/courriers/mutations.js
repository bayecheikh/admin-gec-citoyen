export default {
    initlist(state, newlist) {
        state.listcourriers = newlist
    },
    initlistpie(state, newlist) {
        state.listcourrierspie = newlist
    },
    initinitiallist(state, newlist) {
        state.initiallistcourriers = newlist
    },
    initlisttraites(state, newlist) {
        state.listcourrierstraites = newlist
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