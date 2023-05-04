export default {
    getList({commit}){
        this.$msasApi.$get('roles')
        .then(async (response) => { 
        console.log('Données reçu+++++++++++',response)
            await commit('initlist', response.data)
            await commit('initSelectList', response.data)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requette envoyé ')
        });
    },

    async getDetail({commit},payload){
        /* this.$essApi.$get('/list-roles')
        .then(async (response) => { 
        console.log('Données reçu+++++++++++',response)
            await commit('initlist', response.roles)
            await commit('initSelectList', response.roles)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requette envoyé ')
        }); */
        console.log('Données detail reçu +++++++++++',payload)
        await commit('initdetail', payload)
    },
    async deleteRole({commit,dispatch},payload){
        await commit('removeItem',payload)    
    }
}