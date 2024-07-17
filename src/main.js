import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import Ripple from 'vue-ripple-directive'

Vue.directive('ripple', Ripple);
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(ElementUI)
Vue.use(VXETable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
