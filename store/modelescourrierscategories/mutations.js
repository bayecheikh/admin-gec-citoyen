export default {
    initlist(state, newlist) {
        state.listmodelescourrierscategories = newlist
    },
    initheader(state, newlist) {
        state.headermodelescourrierscategories = newlist
    },
    initdetail(state, newmodelecourriercategorie) {
        state.detailmodelecourriercategorie = newmodelecourriercategorie
    },
    removeItem(state,payload) {
        state.listmodelescourrierscategories = state.listmodelescourrierscategories.filter(item => item.id != payload)
    }
}