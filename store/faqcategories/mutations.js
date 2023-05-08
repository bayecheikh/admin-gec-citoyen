export default {
    initlist(state, newlist) {
        state.listfaqcategories = newlist
    },
    initheader(state, newlist) {
        state.headerfaqcategories = newlist
    },
    initdetail(state, newfaqcategorie) {
        state.detailfaqcategorie = newfaqcategorie
    },
    removeItem(state,payload) {
        state.listfaqcategories = state.listfaqcategories.filter(item => item.id != payload)
    }
}