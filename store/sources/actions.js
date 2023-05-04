export default {
    getList({commit}){
        this.$msasApi.$get('source_financements')
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
        /* this.$essApi.$get('/list-sources')
        .then(async (response) => { 
        console.log('Données reçu+++++++++++',response)
            await commit('initlist', response.sources)
            await commit('initSelectList', response.sources)
            }).catch((error) => {
                console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
            console.log('Requette envoyé ')
        }); */
        console.log('Données detail reçu +++++++++++',payload)
        await commit('initdetail', payload)
    },
    async deleteSource({commit,dispatch},payload){
        await commit('removeItem',payload)    
    }
}