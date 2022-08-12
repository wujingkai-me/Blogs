<template>
  <div>
    <h2 v-text="Hello"></h2>
    <button @click="a(1)" ref="Hello">Hello</button>
  </div>
</template>

<script>
export default {
  name: "VueComponents",
  data() {
    return  {
      Hello: "Hello",
      w: window
    }
  },
  methods: {
    a(meg){
      console.log(this.$refs.hello)
    }
  }
}
</script>