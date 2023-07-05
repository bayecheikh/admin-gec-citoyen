import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/es5/locale/fr';

Vue.use(Vuetify);
Vue.use(Vuetify, {customProperties: true})
export default ctx => {
    const vuetify = new Vuetify({
      lang: {
        locales: { fr },
        current: 'fr',
      },
    });
  
    ctx.app.vuetify = vuetify;
    ctx.$vuetify = vuetify.framework;
  };