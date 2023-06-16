export default {
    getList({commit}){
  
       commit('initlist', [
       
        { id: 2023, libelle_annee: 2023 },
       
        
      ])
         
    },
    async getDetail({commit},payload){
      console.log('Données détail reçues +++++++++++',payload)
      await commit('initdetail', payload)
    },
    async deleteannee({commit,dispatch},payload){
      await commit('removeItem',payload) 
      
  }
}