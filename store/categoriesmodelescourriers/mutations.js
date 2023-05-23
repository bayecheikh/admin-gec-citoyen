export default {
    initlist(state, newlist) {
        state.listcategoriesmodelescourriers = newlist
    },
    initheader(state, newlist) {
        state.headercategoriesmodelescourriers = newlist
    },
    initdetail(state, newcategoriemodelecourrier) {
        state.detailcategoriemodelecourrier = newcategoriemodelecourrier
    },
    removeItem(state,payload) {
        state.listcategoriesmodelescourriers = state.listcategoriesmodelescourriers.filter(item => item.id != payload)
    }
}