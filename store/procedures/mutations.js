export default {
    initlist(state, newlist) {
        state.listprocedures = newlist
    },
    initSelectList(state, newlist) {
        state.selectListProcedures = newlist
    },
    initheader(state, newlist) {
        state.headerprocedures = newlist
    },
    initdetail(state, newprocedure) {
        state.detailprocedure = newprocedure
    }
}