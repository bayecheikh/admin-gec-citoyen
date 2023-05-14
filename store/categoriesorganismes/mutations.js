export default {
    initlist(state, newlist) {
        state.listcategoriesorganismes = newlist
    },
    initheader(state, newlist) {
        state.headercategoriesorganismes = newlist
    },
    initdetail(state, newcategorieorganisme) {
        state.detailcategorieorganisme = newcategorieorganisme
    },
    removeItem(state,payload) {
        state.listcategoriesorganismes = state.listcategoriesorganismes.filter(item => item.id != payload)
    }
}