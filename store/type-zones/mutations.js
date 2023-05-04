export default {
    initlist(state, newlist) {
        state.listtypezones = newlist
    },
    initheader(state, newlist) {
        state.headertypezones = newlist
    },
    initdetail(state, newtypezone) {
        state.detailtypezone = newtypezone
    },
    removeItem(state,payload) {
        state.listtypezones = state.listtypezones.filter(item => item.id != payload)
    }
}