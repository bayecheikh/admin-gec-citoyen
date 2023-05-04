import state from "./state";

export default {
    async getSelectList({commit}){
        this.$msasApi.$get('selectstructures')
        .then(async (response) => { 
        console.log('Données reçu select list +++++++++++',response)
            //await commit('initlist', response.data)
            await commit('initSelectList', response.data)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requette envoyé ')
        });        
     },
    async getList({commit},payload){
       await commit('initlist', payload)        
    },
    async getDetail({commit},payload){
        await commit('initdetail', payload)
    },
    async deleteStructure({commit,dispatch,state},payload){
        await commit('removeItem',payload)     
    },
    async getTotalPage({commit},payload){
        await commit('inittotalpage', payload)
    },
    async getPerPage({commit},payload){
        await commit('initperpage', payload)
    },
    async getCurrentPage({commit},payload){
        await commit('initcurrentpage', payload)
    },
    async getDataSearch({commit},payload){
        await commit('initdatasearch', payload)
    },
}