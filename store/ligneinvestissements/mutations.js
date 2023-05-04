export default {
    initlist(state, newlist) {
        state.listligneinvestissements = newlist
    },
    initheader(state, newlist) {
        state.headerligneinvestissements = newlist
    },
    initheaderavance(state, newlist) {
        state.headerligneinvestissementavances = newlist
    },
    initdetail(state, newligneinvestissement) {
        state.detailligneinvestissement = newligneinvestissement
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
        state.listligneinvestissements = state.listligneinvestissements.filter(item => item.id != payload)
    }
}