<template>
    <div>
        <h2>学生姓名: {{ name }}</h2>
        <h2>学生年龄: {{ age }}</h2>    
        <h2>学生地址: {{ address }}</h2>    
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                name: "张三",
                address: "太原",
                age: 18
            }
        }
    }
</script>