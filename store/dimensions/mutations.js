export default {
    initlist(state, newlist) {
        state.listdimensions = newlist
    },
    initheader(state, newlist) {
        state.headerdimensions = newlist
    },
    initdetail(state, newdimension) {
        state.detaildimension = newdimension
    },
    removeItem(state,payload) {
        state.listdimensions = state.listdimensions.filter(item => item.id != payload)
    }
}