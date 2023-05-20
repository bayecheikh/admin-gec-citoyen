export default {
    getList({commit}){
      this.$gecApi.$get('/categorie-contenu')
      .then(async (response) => { 
        console.log('Données CONTENUS CATEGORIE reçu+++++++++++',response.data.data)
            await commit('initlist', response.data.data)
          }).catch((error) => {
              console.log('Code error ++++++: ', error?.response?.data?.data?.message)
              this.$toast.error(error?.response?.data?.data?.message).goAway(3000)
          }).finally(() => {
            console.log('Requête envoyée ')
          });
    },
    async getDetail({commit},payload){
      console.log('Données detail reçu +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deletecontenucategorie({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}