import Vue from 'vue'
import App from './App.vue'
import './assets/Css/style.css'

import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import VueNumericInput from 'vue-numeric-input';

Vue.use(VueNumericInput)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')