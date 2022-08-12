# Vue 初始Vue
- Vue 需要有一个容器去承载里面的内容
- Vue 需要扩展程序来调试Vue的代码
- Vue 分为**插值语法**、**指令语法**两种

指令语法：`v-bind:`

插值语法：`{{  }}`

# 模板语法
` v-model`: 适用于数据的双向绑定，但只支持有value的对象 简写 `v-model=""`

`el` 有两种方式可以写
- 直接在 `new Vue({el: ""})`
- 将n`ew Vue()`中的内容通过一个变量保存后 重新使用`v.$mount("#root")` 
- 挂载data 有三种写法
  - `data: {}`
  - `data: function(){}`
  - `data(){}`

# Object.defineProperty 对象
- `Object.defineProperty` 用来检测属性的更改和删除

格式为：`Object.defineProperty(对象名, 检测属性, 配置对象：{ })`

```javascript
let preson = {
  name: "jack",
  age: 20,
};
 Object.defineProperty(preson, "sex", {
  // value: 1,
  // enumerable: true, // 是否可以被枚举
  // writable: true, // 是否可以被修改
  // configurable: true, // 是否可以被删除
  get() { }
  set(value) { } // 会有一个值来检测set的调用
 })
```

# 事件处理
- 可以通过 `@` 的形式绑定事件
- 可以通过 `v-on:` 的形式绑定事件
```html
  <div @click="Click">Click me</div>
```
值得注意的是绑定事件的引号中只可以书写关于`Vue`的对象

# 事件修饰符
- `prevent`: 阻止默认行为
- `stop`: 阻止冒泡
- `once`: 只谈出一次框
- `capture`: 捕获模式
- `self`: e.target 是自己的时候才会执行
- `passtive`: 先执行浏览器的默认行为在执行回调函数

通常使用在绑定事件对象后面利用`.`操作符操作
```html
<div @click.once="methods">Click me</div>

<div @click.stop="methods">Click me</div>

<div @click.prevent="methods">Click me</div>

...
```
# 监视属性
**监视属性必须存在才可以监视**

## 第一种方式设置监视属性
```javascript
watch: {
  属性:
  { 
    immediate: true,
    handler(newValue, oldValue){
    
    } 
  }
}
```

`immediate`: 会立即执行回调函数

`handler`: 会监视监视属性是否发生了变化
## 第二种方式设置监视属性
```javascript
vm.$watch("属性", {  }) 
```
## 完整的`watch`
```javascript

watch: {
  属性:{ 
    deep: true, // 深层监视
    immediate: true,  // 立即执行回调函数
    handler(newValue, oldValue){
    
    } 
  }
}
```

# 样式绑定
- `style`
- `class`

## Class
`:class` 数组写法直接在数组中写样式的名称
```javascript
className: [Style1, Style2, Style3]
```
`:class` 在数组中写对象的key
```javascript
className: { deep: true }
```

## Style
`:style `对象写法在对象中写
```javascript
StyleObject: { color: "lightblue" }
```

`:style`数组写法数组中的值是对象 { Obj1, Obj2 }

```javascript
Style: [StyleObject1, StyleObject2, StyleObject3]
```

# 条件渲染
 - `v-show`: 布尔值控制元素的显示和隐藏 display：none
- `v-if`: 确定内容是否显示，消失的很彻底
- `v-if-else`,` v-else`, 其中v-if, v-if-else, v-else 其中不允许被打断
- `template` 标签只能配合v-if

```html
<div id="root">
  <h1 v-show="false">
    Welcome to {{ country }}
  </h1>
</div>
```

# 列表渲染
`v-for` 用于遍历指定数组 需要有一个`:key`来指定每一个遍历元素的唯一索引
- 按数组遍历   `v-for="item, index in items"`
- 字符串遍历  ` v-for="item, index of 'Hello' "`
- 指定次数遍历 `v-for="item, index of 5"`

```html
<ul>
  <li v-for="item, index in items" :key="index">
</ul>
```
**请一定注意上方的:key**

# Vue的生命周期
从上到下
```javascript
beforeCreate() { },
created() { },
beforeMount() { },
mounted() { },
beforeUpdate() { },
updated() { },
```
![ALT](https://cn.vuejs.org/assets/lifecycle.16e4c08e.png)

# Vue概览
```javascript
const vm = new Vue({
  el: "",
  data: { },
  methods: { },
  watch: {},
  computed: { },
  components: { }
})
```
# 使用脚手架安装Vue
安装**Vue/Cli**
```
npm install -g @vue/cli
```
卸载**Vue/Cli**
```
npm uninstall -g @vue/cli
```
---
使用`Vue`脚手架创建项目
```
vue create TheFirstVue
```
启动项目
```
vue run sever
```
`main.js`
```javascript
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
```

Vue的版本控制是为了发布的时候，去除掉生产环境中，没有必要的内容

Vue的语法检查关闭，如果不关闭，在`main.js`定义一个没有被使用的变量就会产生异常

```javascript
lintOnSave: false
```