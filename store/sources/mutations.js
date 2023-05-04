export default {
    initlist(state, newlist) {
        state.listsources = newlist
    },
    initSelectList(state, newlist) {
        state.selectListsources= newlist
    },
    initheader(state, newlist) {
        state.headersources = newlist
    },
    initdetail(state, newsource) {
        state.detailsource = newsource
    },
    removeItem(state,payload) {
        state.listsources = state.listsources.filter(item => item.id != payload)
    }
}