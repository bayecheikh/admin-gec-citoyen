export default {
    initlist(state, newlist) {
        state.listcategoriesfoireauxquestions = newlist
    },
    initheader(state, newlist) {
        state.headercategoriesfoireauxquestions = newlist
    },
    initdetail(state, newcategoriefoireauxquestions) {
        state.detailcategoriefoireauxquestions = newcategoriefoireauxquestions
    },
    removeItem(state,payload) {
        state.listcategoriesfoireauxquestions = state.listcategoriesfoireauxquestions.filter(item => item.id != payload)
    }
}