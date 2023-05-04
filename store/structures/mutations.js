export default {
    initlist(state, newlist) {
        state.liststructures = newlist
    },
    initSelectList(state, newlist) {
        state.selectliststructures = newlist
    },
    initheader(state, newlist) {
        state.headerstructures = newlist
    },
    initdetail(state, newstructure) {
        state.detailstructure = newstructure
    },
    inittotalpage(state, newtotalpage) {
        state.totalPage = newtotalpage
    },
    initperpage(state, newtperpage) {
        state.perPage = newtperpage
    },
    initcurrentpage(state, newtperpage) {
        state.currentPage = newtperpage
    },
    initdatasearch(state, newdatasearch) {
        state.dataSearch = newdatasearch
    },
    removeItem(state,payload) {
        console.log('item to delete ++++++++ ',payload)
        state.liststructures = state.liststructures.filter(item => item.id != payload)
    }
}