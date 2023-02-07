<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>
<template>
  <div class="image" style="background-image: url('https://thumbs.dreamstime.com/b/doctor-leading-medical-blurry-hospital-background-doctor-leading-medical-blurry-hospital-background-130587421.jpg');
    height: 100vh; background-size: cover">
    <div>
      <form class="loginform" v-on:submit="auth" @submit.prevent="getFormValues">
        <h2>
          <center>LOGIN</center>
        </h2><br>
        <input type="email" v-model="dr_data.userid" placeholder="Username or Email" /><br><br>
        <p style=" color:crimson "> {{ dr_data.emailError }} </p>
        <input type="password" v-model="dr_data.password" placeholder="Password" /><br><br>
        <p style=" color:crimson"> {{ dr_data.passwordError }} </p>
        <input type="submit" value="Log In" class="loginbut">
        <RouterLink to="/doctor/signup" class="log">Sign Up</RouterLink>
      </form>
    </div>
  </div>
  <RouterView />
</template>
<script>
import axios from 'axios';
export default {
  name: 'doctor_auth',
  data() {
    return {
      dr_data: {
        userid: "",
        password: "",
        emailError: "",
        passwordError: "",
        drname:"",
        drphoto:""
      }
    };
  },
  methods: {
    async auth() {
      try {
        console.log(this.dr_data.userid);
        console.log(this.dr_data.password);
        let result = await axios.post("http://127.0.0.1:5000/doctor", {
          email: this.dr_data.userid,
          password: this.dr_data.password
        })
          .then((res) => {
            const data = res;
            if (data.data.doctor._id) {
              alert('You Are Logged In ')
              this.$router.push({ path: '/doctor/profile' });
              this.dr_data.drphoto = data.data.doctor.picturePath;
              this.dr_data.drname = data.data.doctor.firstName+" "+data.data.doctor.lastName;
              //location.assign('/doctor/profile');
              localStorage.setItem('name', this.dr_data.drname);
              localStorage.setItem('photo', this.dr_data.drphoto);
            }
          })
          .catch((err) => {
            const error = err;
            this.dr_data.emailError = error.response.data.email;
            this.dr_data.passwordError = error.response.data.password;
          })
      }
      catch (error) {
        console.log(err.message);
      }
    }
  }
}
</script>