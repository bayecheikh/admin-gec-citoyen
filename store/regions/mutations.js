export default {
    initlist(state, newlist) {
        state.listregions = newlist
    },
    initSelectList(state, newlist) {
        state.selectListregions= newlist
    },
    initheader(state, newlist) {
        state.headerregions = newlist
    },
    initdetail(state, newregion) {
        state.detailregion = newregion
    },
    removeItem(state,payload) {
        state.listregions = state.listregions.filter(item => item.id != payload)
    }
}