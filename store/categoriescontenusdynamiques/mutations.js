export default {
    initlist(state, newlist) {
        state.listcategoriescontenusdynamiques = newlist
    },
    initheader(state, newlist) {
        state.headercategoriescontenusdynamiques = newlist
    },
    initdetail(state, newcategoriecontenudynamique) {
        state.detailcategoriecontenudynamique = newcategoriecontenudynamique
    },
    removeItem(state,payload) {
        state.listcategoriescontenusdynamiques = state.listcategoriescontenusdynamiques.filter(item => item.id != payload)
    }
}