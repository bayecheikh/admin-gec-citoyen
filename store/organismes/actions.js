export default {
    getList({commit}){
          
  // const listorganismes = [
  //     {id: '64354ed846bf128b4c58e646', intitule:'MAEC'},
  //     {id: '123', intitule:'MJL'},
  //     {id: '456', intitule:'MISP'},
  //     {id: '6435542246bf128b4c58e647', intitule:'MND'},
  //     {id: '6478fa901b5abb021edeb08b', intitule:'MTFP'},
  //   ]
  //   commit('initlist', listorganismes)
      this.$gecApi.$get('/structures')
      .then(async (response) => { 
        console.log('Données reçues contenu+++++++++++',response)
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
    async deleteorganisme({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}