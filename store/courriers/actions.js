export default {
    getList({commit}){
      this.$gecApi.$get('/courriers')
      .then(async (response) => { 
        console.log('Données reçues COURRIERS+++++++++++',response)
            await commit('initlist', response.data.data)
          }).catch((error) => {
           console.log("ERROR GEC", error)
              this.$toast.error(error).goAway(3000)
          }).finally(() => {
            console.log('Requête envoyée ')
      
          });
    },

    async getDetail({commit},payload){
      console.log('Données détail reçues +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deletecourrier({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}