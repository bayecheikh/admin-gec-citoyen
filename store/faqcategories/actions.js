export default {
    getList({commit}){
      this.$gecApi.$get('/categorie-faq')
      .then(async (response) => { 
     
            await commit('initlist', response.data.data)
          }).catch((error) => {
              
              this.$toast.error(error?.response?.data?.data?.message).goAway(3000)
          }).finally(() => {
            
          });
    },
    async getDetail({commit},payload){
      
      await commit('initdetail', payload)
    },
    async deletefaqcategorie({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}