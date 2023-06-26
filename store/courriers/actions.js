export default {
  async getList({ commit }) {

    try {
      const response = await this.$gecApi.$get('/courriers');

      commit('initlist', response.data.data);
      commit('initinitiallist', response.data.data);
      const listtraites =  response.data.data.filter((item) => item.traitement_status_slug == "traite")
      commit('initlisttraites', listtraites);

    } catch (error) {
      
      this.$toast.error(error).goAway(3000);
    } finally {
      ;
    }
  },
  async updateIsPieLoading({ commit }, ispieloading) {

  
      commit('ispieloading', ispieloading);
     
  },
  async updateIsBarLoading({ commit }, isbarloading) {

  
    commit('isbarloading', isbarloading);
   
},
  async getListTraites({ commit }) {
 
    try {
      const responsetraite = await this.$gecApi.$get('/courriers');
  
      const listtraites =  responsetraite.data.data.filter((item) => item.traitement_status_slug == "traite")
      commit('initlisttraites', listtraites);
     

    } catch (error) {
      
      this.$toast.error(error).goAway(3000);
    } finally {
      ;
    }
  },
  async updateList({ commit }, newlist) {
    await commit('initlist', newlist);
  },
  async updateListPie({ commit }, newlist) {
    await commit('initlistpie', newlist);
  },
  async updateListTraites({ commit }, newlist) {
    const newlisttraites =  newlist.filter((item) => item.traitement_status_slug == "traite")
    await commit('initlisttraites', newlisttraites);
  },
  async getDetail({ commit }, payload) {
 
    commit('initdetail', payload);
  },
  async deletecourrier({ commit, dispatch }, payload) {
    commit('removeItem', payload);
  },
};
