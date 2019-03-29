// IMPORTS
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import Vuetify from 'vuetify'
import veevalidate from 'vee-validate'
import pageTitle from 'vue-page-title'
import ApolloClient from './apollo'
import store from './store'
import router from './router'
import App from './App'
import axios from 'axios'

// SETUP PLUGINS
Vue.config.productionTip = false
Vue.use(VueApollo)
Vue.use(Vuetify)
Vue.use(veevalidate)
Vue.use(pageTitle, { router })

Vue.prototype.$axios = axios

// APOLLO PROVIDER
const apolloProvider = new VueApollo({
  defaultClient: ApolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  store,
  router,
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App)
})
