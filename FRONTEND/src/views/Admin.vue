<script setup>

</script>

<template>
 <div class="image" style="background-image: url('https://www.shutterstock.com/image-photo/young-practitioner-doctor-working-clinic-260nw-796833925.jpg');
    height: 100vh; background-size: cover">
    <center>
    <form class="adminform" v-on:submit="register" @submit.prevent ="getFormValues">
        <center><h4>ADMIN REGISTER</h4></center><br>
        <input type="text" v-model="user_data.firstName" name="firstName" placeholder="First Name" required/><br><br>
        <input type="text" v-model="user_data.lastName" name="lastName" placeholder="Last Name" required/><br><br>
        <input type="text" v-model="user_data.email" name="email" placeholder="Enter Email" required/><br><br>
        <input type="text" v-model="user_data.password" name="password" placeholder="Create Password" required/><br><br>
        <label><u><b>Upload Photo</b></u></label><br>
        <input type="file" @change="onFileChange" ref="file" accept="image/*,.pdf" required/> <br><br>
        <input type="submit" value="REGISTER" />
    </form> 
    </center>
</div>
</template>
<script>
import { ref} from "vue"
import axios from 'axios';
    export default {
        name:"admin",
        data() {
            return{
                user_data:{
                    firstName:"",
                    lastName:"",
                    email:"",
                    password:"",
                    files:"",
                }
            };
        },
        
        methods:{
            onFileChange() {
                try{
                    this.files = this.$refs.file.files[0]
                }
                catch(err){ console.log('upload failed')}
            },
            async register(){
                let formData = new FormData();
                formData.append('firstName', this.user_data.firstName );
                formData.append('lastName', this.user_data.lastName);
                formData.append('email', this.user_data.email);
                formData.append('password', this.user_data.password);
                formData.append('files', this.files);            
                try{
                let result =  await axios.post("http://127.0.0.1:5000/admin/signup",formData)
                    .then((res)=>{
                        console.log(res);
                        alert("Registration Successfull");
                        this.$router.push({path: '/admin'});
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
                catch(err){
                    console.log(err.message);
                }

            }
    }
        
    }
</script>
<style scoped>
.adminform{
        width: 300px;
        height: 250px;
        background: linear-gradient(to top, rgba(39, 108, 188, 0.856)50%,rgba(39, 108, 188, 0.856)50%);
        position: absolute;
        top: 120px;
        left: 120px;
        border-radius: 10px;
        padding: 25px;
        color: black;
    }
</style>