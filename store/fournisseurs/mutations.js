export default {
    initlist(state, newlist) {
        state.listpermissions = newlist
    },
    initSelectList(state, newlist) {
        //convert object to array of object
        /* state.selectListFournisseurs= Object.entries(newlist).map(([key, val]) => ({
            id:parseInt([key]),
            name:val
        })); */
        state.selectListFournisseurs= newlist
        console.log('Fournisseur state +++++++++++++++',state.selectListFournisseurs)
    },
    initheader(state, newlist) {
        state.headerpermissions = newlist
    },
    initdetail(state, newpermission) {
        state.detailpermission = newpermission
    }
}