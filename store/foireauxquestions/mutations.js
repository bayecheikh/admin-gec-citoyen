export default {
    initlist(state, newlist) {
        state.listfoireauxquestions = newlist
    },
    initheader(state, newlist) {
        state.headerfoireauxquestions = newlist
    },
    initdetail(state, newfoireauxquestions) {
        state.detailfoireauxquestions = newfoireauxquestions
    },
    removeItem(state,payload) {
        state.listfoireauxquestions = state.listfoireauxquestions.filter(item => item.id != payload)
    }
}