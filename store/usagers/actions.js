export default {
    async getList({commit},payload){
        await commit('initlist', payload)
    },
    async getSelectList({commit},payload){
        await commit('initSelectList', payload)
    },
    async getDetail({commit},payload){
        await commit('initdetail', payload)
    },
    async getTotalPage({commit},payload){
        await commit('inittotalpage', payload)
    },
    async getPerPage({commit},payload){
        await commit('initperpage', payload)
    },
    async getDataSearch({commit},payload){
        await commit('initdatasearch', payload)
    },
    async deleteUsager({commit,dispatch,state},payload){
            await commit('removeItem',payload)    
    }

    /* getSelectList({commit}){
        this.$essApi.$get('/list-users-structure').then(async (response) => { 
            await commit('initSelectList', response?.users)
            console.log('******Liste des structures*******: ',response?.users)
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
          }).finally(() => {
            console.log('Requette envoyé ')
      });
    } */
}