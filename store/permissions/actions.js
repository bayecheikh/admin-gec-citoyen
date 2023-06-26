export default {
    getList({commit}){
      this.$gecApi.$get('/permissions')
      .then(async (response) => { 
        
            await commit('initlist', response.data)
          }).catch((error) => {
              
              // this.$toast.error(error?.response?.data?.message).goAway(3000)
          }).finally(() => {
            
          });
    },
    async getDetail({commit},payload){
      
      await commit('initdetail', payload)
    },
    async deletePermission({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}