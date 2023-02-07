<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="logout">
        <img src="../LOGO.png" class="logo"/>
        <RouterLink to="/logout" class="llog">Logout</RouterLink>
    </nav>
</template>
<style>
    .logo{
    height: 38px;
    width: 80px;
}
</style>