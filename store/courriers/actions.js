export default {
  async getList({ commit }) {
    //   const courriers = [
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2022-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2022-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '123',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '123',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '123',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '456',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '456',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   }

    // ]
    // commit('initlist', courriers);
    // commit('initinitiallist', courriers);
    try {
      const response = await this.$gecApi.$get('/courriers');
      console.log('Données reçues COURRIERS+++++++++++', response);
      commit('initlist', response.data.data);
     

    } catch (error) {
      console.log('ERROR GEC', error);
      this.$toast.error(error).goAway(3000);
    } finally {
      console.log('Requête envoyée');
    }
  },
  async getListTraites({ commit }) {
    // const courriers = [
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2022-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2022-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '64354ed846bf128b4c58e646',
    //     'createdAt': '2023-06-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2022-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6435542246bf128b4c58e647',
    //     'createdAt': '2023-05-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '6478fa901b5abb021edeb08b',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '123',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '123',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '123',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'traite'
    //   },
    //   {
    //     'structure': '456',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   },
    //   {
    //     'structure': '456',
    //     'createdAt': '2023-04-07T16:35:54.766Z',
    //     'traitement_status_slug': 'en-cours-de-traitement'
    //   }

    // ]
    // const listtraites =  courriers.filter((item) => item.traitement_status_slug == "traite")
    // commit('initlisttraites', listtraites);
    try {
      const responsetraite = await this.$gecApi.$get('/courriers');
      console.log('Données reçues COURRIERS+++++++++++', response);
      const listtraites =  responsetraite.data.data.filter((item) => item.traitement_status_slug == "traite")
      commit('initlisttraites', listtraites);
     

    } catch (error) {
      console.log('ERROR GEC', error);
      this.$toast.error(error).goAway(3000);
    } finally {
      console.log('Requête envoyée');
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
    console.log('Données détail reçues +++++++++++', payload);
    commit('initdetail', payload);
  },
  async deletecourrier({ commit, dispatch }, payload) {
    commit('removeItem', payload);
  },
};
