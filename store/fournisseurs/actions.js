export default {
    getList({commit}){
        this.$essApi.$get('/list-fournisseurs').then(async (response) => { 
            console.log('******Liste des structures *******: ',response?.fournisseurs)
            await commit('initSelectList', response?.fournisseurs)
            
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.message)
          }).finally(() => {
            console.log('Requette envoyé ')
      });
    }
}