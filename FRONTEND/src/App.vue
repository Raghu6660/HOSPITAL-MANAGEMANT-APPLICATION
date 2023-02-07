<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="wrapper">
    </div>
  <RouterView />
</template>

<style scoped>
  nav{
    height: 45px;
     width: 100%;
     font-size: 15px;
     border-bottom: 1px solid black;
     background-color: aquamarine;
  }
  nav a{
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    margin: 10px;
    border-radius: 5px;
  }
  nav a.router-link-exact-active {
    color: white;
    background-color: black;
    opacity: 0.5;
  }
</style>
