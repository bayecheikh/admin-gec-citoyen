export default {
    initlist(state, newlist) {
        state.listinvestissements = newlist
    },
    initheader(state, newlist) {
        state.headerinvestissements = newlist
    },
    initheaderavance(state, newlist) {
        state.headerinvestissementavances = newlist
    },
    initdetail(state, newinvestissement) {
        state.detailinvestissement = newinvestissement
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
        state.listinvestissements = state.listinvestissements.filter(item => item.id != payload)
    }
}