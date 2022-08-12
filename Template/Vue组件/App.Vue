<template>
    <div>
        <SchoolVue/>
        <StudentVue/>
    </div>
</template>

<script>
    import SchoolVue from "./School.vue"
    import StudentVue from "./Student.vue"
    export default {
        name: "App",
        components: {
            SchoolVue, StudentVue
        }
    }
</script>