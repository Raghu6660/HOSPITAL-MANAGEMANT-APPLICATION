<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Logout from '../components/LogoutNav.vue'
</script>

<template>
    <Logout/>
    <h1>Admin Patient Page</h1>
</template>


<script>
</script>




<style>
    .logout{
        height: 38px;
    }
    .llog{
        color: rgb(210, 92, 214);
        float: right;
        margin-top: 5px;
        border-style: groove;
        border-radius: 10px;
        background-color: rgb(221, 234, 78);
    }
</style>