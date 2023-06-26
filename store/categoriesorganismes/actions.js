export default {
    getList({commit}){
      this.$gecApi.$get('/type-structure')
      .then(async (response) => { 
        
            await commit('initlist', response.data.data)
          }).catch((error) => {
           
              this.$toast.error(error).goAway(3000)
          }).finally(() => {
            
      
          });
    },
    async getDetail({commit},payload){
      
      await commit('initdetail', payload)
    },
    async deletecategorieorganisme({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}