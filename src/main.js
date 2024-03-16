import Vue from 'vue';
import App from './App.vue';



Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


// Configura las rutas


// Crea una instancia de VueRouter y pasa las rutas


// Asocia el enrutador con la instancia principal de Vue
new Vue({
 
  render: h => h(App),
}).$mount('#app')