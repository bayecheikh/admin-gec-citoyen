export default {
    initlist(state, newlist) {
        console.log('---------------------------------------',newlist)
        state.listusagers = newlist
    },
    initSelectList(state, newlist) {
        state.selectListUsagers = newlist
    },
    initheader(state, newlist) {
        state.headerusagers = newlist
    },
    initdetail(state, newusager) {
        state.detailusager = newusager
    },
    inittotalpage(state, newtotalpage) {
        state.totalPage = newtotalpage
    },
    initperpage(state, newtperpage) {
        state.perPage = newtperpage
    },
    initdatasearch(state, newdatasearch) {
        state.dataSearch = newdatasearch
    },
    removeItem(state,payload) {
        state.listusagers = state.listusagers.filter(item => item.id != payload)
    }
}