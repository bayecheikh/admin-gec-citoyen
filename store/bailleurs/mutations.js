export default {
    initlist(state, newlist) {
        state.listbailleurs = newlist
    },
    initheader(state, newlist) {
        state.headerbailleurs = newlist
    },
    initdetail(state, newbailleur) {
        state.detailbailleur = newbailleur
    },
    removeItem(state,payload) {
        state.listbailleurs = state.listbailleurs.filter(item => item.id != payload)
    }
}