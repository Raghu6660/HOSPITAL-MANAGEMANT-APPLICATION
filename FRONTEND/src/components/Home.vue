<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="bg-image" style="background-image: url('https://www.alert-software.com/hubfs/it%20department%20hospital.png'); 
    height: 100vh; background-size: cover"> 
        <nav>
        <img src="../LOGO.png" class="mlogo"/>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
        <RouterLink to="/doctor">Doctor</RouterLink>
        <RouterLink to="/patient">Patient</RouterLink>
      </nav>
        <h1>M R V HOSPITALS</h1>
    </div>
</template>
<script>
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    nav{
    height: 45px;
     width: 100%;
     font-size: 15px;
     border-bottom: 1px solid black;
     background-color: rgb(70, 174, 140);
  }
  nav a{
    display: inline-block;
    padding: 4px 10px;
    text-decoration: none;
    margin: 10px;
    border-radius: 5px;
  }
  nav a.router-link-exact-active {
    color: white;
    background-color: black;
    opacity: 0.5;
  }
  .mlogo{
    height: 38px;
    width: 100px;
  }
</style>