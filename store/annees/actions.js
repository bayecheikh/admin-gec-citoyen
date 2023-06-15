export default {
    getList({commit}){
  
       commit('initlist', [
        { id: 2022, libelle_annee: 2022 },
        { id: 2023, libelle_annee: 2023 },
        { id: 2024, libelle_annee: 2024 },
        { id: 2025, libelle_annee: 2025 }
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