import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.config.warnHandler = function (msg, vm, trace) {        //Vue.config.productionTip = false;
    return null
  }
  

app.use(router)

app.mount('#app')
