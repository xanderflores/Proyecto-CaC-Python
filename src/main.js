import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

// Importa los componentes para las diferentes rutas
import Contacto from './Pages/Contacto/ContactoComp.vue';


Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


// Configura las rutas
const routes = [
  { path: '/', component: App },
  { path: '/contacto', component: Contacto}
];

// Crea una instancia de VueRouter y pasa las rutas
const router = new VueRouter({
  routes
});


// Asocia el enrutador con la instancia principal de Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')