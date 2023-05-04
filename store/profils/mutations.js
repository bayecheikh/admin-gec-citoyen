export default {
    initlist(state, newlist) {
        state.listprofils = newlist
    },
    initSelectList(state, newlist) {
        /* state.selectListprofils= Object.entries(newlist).map(([key, val]) => ({
            id:parseInt([key]),
            name:val
        })); */
        state.selectListprofils= newlist
    },
    initheader(state, newlist) {
        state.headerprofils = newlist
    },
    initdetail(state, newprofil) {
        state.detailprofil = newprofil
    }
}