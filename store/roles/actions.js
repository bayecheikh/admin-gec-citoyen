export default {
    getList({commit}){
        this.$gecApi.$get('roles')
        .then(async (response) => { 
        
            await commit('initlist', response.data)
            await commit('initSelectList', response.data)
            }).catch((error) => {
                
            }).finally(() => {
            
        });
    },

    async getDetail({commit},payload){
        /* this.$essApi.$get('/list-roles')
        .then(async (response) => { 
        
            await commit('initlist', response.roles)
            await commit('initSelectList', response.roles)
            }).catch((error) => {
                
            }).finally(() => {
            
        }); */
        
        await commit('initdetail', payload)
    },
    async deleteRole({commit,dispatch},payload){
        await commit('removeItem',payload)    
    }
}