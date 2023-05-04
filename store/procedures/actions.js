export default {
    getList({commit}){
        this.$essApi.$get('/ess/procedures').then(async (response) => { 
            commit('initSelectList',response?.procedures)
             console.log('******/ Liste des sprocedures /*******: ',response?.procedures)
           }).catch((error) => {
               console.log('Code error ++++++: ', error?.response?.data?.message)
           }).finally(() => {
             console.log('Requette envoyé ')
       });
    }
}