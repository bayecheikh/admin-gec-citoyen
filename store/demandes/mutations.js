export default {
    initlist(state, newlist) {
        state.listdemandes = newlist
    },
    initheader(state, newlist) {
        state.headerdemandes = newlist
    },
    initheaderavance(state, newlist) {
        state.headerdemandeavances = newlist
    },
    initdetail(state, newdemande) {
        state.detaildemande = newdemande
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
        state.listdemandes = state.listdemandes.filter(item => item.id != payload)
    }
}