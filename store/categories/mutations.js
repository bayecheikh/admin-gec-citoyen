export default {
    initlist(state, newlist) {
        state.listcategories = newlist
    },
    initheader(state, newlist) {
        state.headercategories = newlist
    },
    initdetail(state, newcategorie) {
        state.detailcategorie = newcategorie
    },
    removeItem(state,payload) {
        state.listcategories = state.listcategories.filter(item => item.id != payload)
    }
}