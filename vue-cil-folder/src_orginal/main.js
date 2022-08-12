// 引入Vue
import Vue from 'vue'
// Vue是所有组件的父组件
import App from './App.vue'

let a = 0;
// 关闭生产环境的提示
Vue.config.productionTip = false

// let a = 1;

new Vue({
  render: h => h(App),
  // 相同的
  // render(h){
  //   return h("h2", "你好")
  // }
}).$mount('#app')
