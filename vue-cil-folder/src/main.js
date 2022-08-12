// 引入Vue
import Vue from 'vue'
// Vue是所有组件的父组件
import App from './App.vue'

// 关闭生产环境的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 相同的
  // render(h){
  //   return h("h2", "你好")
  // }
}).$mount('#app')
