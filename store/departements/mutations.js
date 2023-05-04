export default {
    initlist(state, newlist) {
        state.listdepartements = newlist
    },
    initheader(state, newlist) {
        state.headerdepartements = newlist
    },
    initdetail(state, newdepartement) {
        state.detaildepartement = newdepartement
    },
    removeItem(state,payload) {
        state.listdepartements = state.listdepartements.filter(item => item.id != payload)
    }
}