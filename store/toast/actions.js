export default {
    async getMessage({commit},payload){
        console.log('++++++++++++++++++++message ',payload)
        await commit('initmessage', payload)        
    }
}