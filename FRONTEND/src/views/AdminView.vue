<script setup>
import {RouterView, RouterLink } from 'vue-router';
//import AdminProfile from './AdminProfile.vue';
</script>

<template>
    <div class="image" style="background-image: url('https://www.shutterstock.com/image-photo/young-practitioner-doctor-working-clinic-260nw-796833925.jpg');
    height: 100vh; background-size: cover">
    <div>
      <form class="loginform" v-on:submit="auth" @submit.prevent ="getFormValues">
        <h2><center>LOGIN</center></h2><br>
        <input type="email" v-model="admin_data.userid" placeholder="Username or Email"/><br><br>
        <p style=" color:crimson "> {{ admin_data.emailError }} </p>
        <input type="password" v-model="admin_data.password" placeholder="Password" /><br><br>
        <p style=" color:crimson"> {{ admin_data.passwordError }} </p>
        <input type="submit" value="Log In" class="loginbut">
       <RouterLink to="/admin/signup" class="log">Sign Up</RouterLink>
      </form>
    </div>
    </div>
    <RouterView />
</template>
<script>
  import axios from 'axios';
  export default{
    name:'admin_auth',
    //component: AdminProfile,
    data(){
    return{
      admin_data:{
        userid:"",
        password:"",
        emailError:"",
        passwordError:"",
        photo:"",
        adname:""
      }
    };
  },
    methods:{
      async auth(){
      try{
        // console.log(this.admin_data.userid);
        // console.log(this.admin_data.password);
          let result = await axios.post("http://127.0.0.1:5000/admin",{
            email:this.admin_data.userid,
            password:this.admin_data.password
          })
          .then((res)=>{
                const data = res;
                console.log(data);
                if (data.data.admin._id) {
                  this.admin_data.photo = data.data.admin.picturePath;
                  this.admin_data.adname = data.data.admin.firstName+" "+data.data.admin.lastName;
                  // console.log(this.admin_data.photo);
                  // console.log(this.admin_data.adname);
                  alert('You Are Logged In ')
                  this.$router.push({path: '/admin/profile'});
                  // this.$router.push({
                  //   name: "adminprofile",
                  //   params:{
                  //     user:{
                  //       photo: this.admin_data.photo.data.data,
                  //       adname: this.admin_data.adname,
                  //     },
                  //   },
                  // });
                  //console.log(this.admin_data.photo.data);
                  //location.assign('/admin/profile');
                  // localStorage.setItem('email',this.admin_data.adname);
                  // localStorage.setItem('photo', this.admin_data.photo);
                  localStorage.setItem('name', this.admin_data.adname);
                  localStorage.setItem('photo', this.admin_data.photo);
                }

            })
          .catch((err)=>{ 
              const error = err;

                  this.admin_data.emailError = error.response.data.email;
                 this.admin_data.passwordError = error.response.data.password;
          })

      }
      catch(err){
        console.log(err.message);
      }
    }
  }
  }

</script>
<style>
/* .image{
  opacity: 0.7;
} */
div{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 15px;
}
div a{
    text-decoration: none;
}
.loginform{
        width: 300px;
        height: 140px;
        background: linear-gradient(to top, rgba(38, 188, 186, 0.856)50%,rgba(39, 188, 186, 0.856)50%);
        position: absolute;
        top: 150px;
        left: 320px;
        border-radius: 10px;
        padding: 25px;
        color: black;
    }
  .loginbut{
    /* color: blue;
    background-color: coral;
    border-style: none;
    width: 60px; */
    margin-right: 10px;
  }
  div a.log{
    background-color: aliceblue;
    border-radius: 3px;
    border: 1px solid rgb(102, 97, 97);
    color: black;
    font: 1em Arial, sans-serif;
    font-size: 13px;

  }
</style>
