<script setup>
import {RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <div class="image" style="background-image: url('https://t4.ftcdn.net/jpg/01/83/20/03/240_F_183200379_GBy7AOXqDhSOcSfti4xyJbiOSCadtjf0.jpg');
    height: 100vh; background-size: cover">
    <div>
      <form class="loginform" v-on:submit="auth" @submit.prevent ="getFormValues">
        <h2><center>LOGIN</center></h2><br>
        <input type="email" v-model="pa_data.userid" placeholder="Username or Email"/><br><br>
        <p style=" color:crimson "> {{ pa_data.emailError }} </p>
        <input type="password" v-model="pa_data.password" placeholder="Password" /><br><br>
        <p style=" color:crimson"> {{ pa_data.passwordError }} </p>
        <input type="submit" value="Log In" class="loginbut">
       <RouterLink to="/patient/signup" class="log">Sign Up</RouterLink>
      </form>
    </div>
    </div>
    <RouterView/>
</template>
<script>
  import axios from 'axios';
  export default{
    name:'patient_auth',
    data(){
    return{
      pa_data:{
        userid:"",
        password:"",
        emailError:"",
        passwordError:"",
        paname:"",
        paphoto:""
      }
    };
  },
    methods:{
      async auth(){
      try{
        console.log(this.pa_data.userid);
        console.log(this.pa_data.password);
          let result = await axios.post("http://127.0.0.1:5000/patient",{
            email:this.pa_data.userid,
            password:this.pa_data.password
          })
          .then((res)=>{
                const data = res;
                if (data.data.patient._id) {
                  alert('You Are Logged In ')
                  this.$router.push({path: '/patient/profile'});
                  //location.assign('/doctor/profile');
                }
                this.pa_data.paname = data.data.patient.firstName+" "+data.data.patient.lastName;
                this.pa_data.paphoto = data.data.patient.picturePath;
                localStorage.setItem('name', this.pa_data.paname);
                localStorage.setItem('photo', this.pa_data.paphoto);
            })
          .catch((err)=>{ 
              const error = err;

                  this.pa_data.emailError = error.response.data.email;
                 this.pa_data.passwordError = error.response.data.password;
          })

      }
      catch(error){
        console.log(err.message);
      }
    }
  }
  }

</script>