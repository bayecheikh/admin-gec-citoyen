export default {
    initlist(state, newlist) {
        state.listmodelescourriers = newlist
    },
    initheader(state, newlist) {
        state.headermodelescourriers = newlist
    },
    initdetail(state, newmodelecourrier) {
        state.detailmodelecourrier = newmodelecourrier
    },
    removeItem(state,payload) {
        state.listmodelescourriers = state.listmodelescourriers.filter(item => item.id != payload)
    }
}