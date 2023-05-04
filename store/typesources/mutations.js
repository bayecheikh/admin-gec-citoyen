export default {
    initlist(state, newlist) {
        state.listtypesources = newlist
    },
    initheader(state, newlist) {
        state.headertypesources = newlist
    },
    initdetail(state, newtypesource) {
        state.detailtypesource = newtypesource
    },
    removeItem(state,payload) {
        state.listtypesources = state.listtypesources.filter(item => item.id != payload)
    }
}