export default {
    initlist(state, newlist) {
        state.listtypelignes = newlist
    },
    initheader(state, newlist) {
        state.headertypelignes = newlist
    },
    initdetail(state, newtypeligne) {
        state.detailtypeligne = newtypeligne
    },
    removeItem(state,payload) {
        state.listtypelignes = state.listtypelignes.filter(item => item.id != payload)
    }
}