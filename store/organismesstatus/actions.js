export default {
    getList({commit}){
      const listorganismesstatus = [
        {id:0, name:'Inactif'},
        {id:1, name:'Actif'}
      ]
      commit('initlist', listorganismesstatus)
         
    },
    async getDetail({commit},payload){
      console.log('Données detail reçu +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deleteorganismestatus({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}