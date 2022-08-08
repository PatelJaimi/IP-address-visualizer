import Vue from 'vue'
import App from './App.vue'
import './assets/styles/style.css'
import './assets/styles/media.css';

// Store (Vuex)
import store from './store'

// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Vue Numeric Input
import VueNumericInput from 'vue-numeric-input';
Vue.use(VueNumericInput)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')