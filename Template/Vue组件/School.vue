<template>
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "especiallySchool",
  data: function () {
    return {
      name: "TY",
      address: "TY",
    };
  },
};
</script>

<style>
.demo {
  background: gold;
}
</style>
