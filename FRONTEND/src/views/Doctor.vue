<script setup>
</script>

<template>
    <div class="image" style="background-image: url('https://thumbs.dreamstime.com/b/doctor-leading-medical-blurry-hospital-background-doctor-leading-medical-blurry-hospital-background-130587421.jpg');
     height: 100vh; background-size: cover">
        <center>
    <form class="drform" v-on:submit="register" @submit.prevent ="getFormValues">
        <center><h3>DOCTOR REGISTER</h3></center><br>
        <input type="text" v-model="dr_data.firstName" name="firstName" placeholder="First Name"/><br><br>
        <input type="text" v-model="dr_data.lastName" name="lastName" placeholder="Last Name"/><br><br>
        <input type="text" v-model="dr_data.spec" name="spec" placeholder="Specification" /><br><br>
        <input type="text" v-model="dr_data.address" name="address" placeholder="Enter Address" /><br><br>
        <input type="tel" v-model="dr_data.mobile" name="mobile" placeholder="Mobile Number" /><br><br>
        <input type="text" v-model="dr_data.email" name="email" placeholder="Enter Email" /><br><br>
        <input type="text" v-model="dr_data.password" name="password" placeholder="Create Password" /><br><br>
        <lable><u><b>Upload Photo</b></u></lable>
        <input type="file" @change="onFileChange" ref="file" accept="image/*,.pdf" required/> <br><br>
        <input type="submit" value="REGISTER" />
    </form>
        </center>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name:"doctor",
        data() {
            return{
                dr_data:{
                    firstName:"",
                    lastName:"",
                    spec:"",
                    address:"",
                    mobile:"",
                    email:"",
                    password:"",
                    files:""
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
                formData.append('firstName', this.dr_data.firstName );
                formData.append('lastName', this.dr_data.lastName);
                formData.append('spec', this.dr_data.spec );
                formData.append('address', this.dr_data.address);
                formData.append('mobile',this.dr_data.mobile);
                formData.append('email', this.dr_data.email);
                formData.append('password', this.dr_data.password);
                formData.append('files', this.files);            
                try{
                let result =  await axios.post("http://127.0.0.1:5000/doctor/signup",formData)
                    .then((res)=>{
                        console.log(res);
                        alert("Registration Successfull");
                        this.$router.push({path: '/doctor'});
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
<style>
    .drform{
        width: 300px;
        height: 350px;
        background: linear-gradient(to top, rgba(122, 221, 198, 0.8)50%,rgba(122, 221, 198, 0.8)50%);
        position: absolute;
        top: 55px;
        left: 520px;
        border-radius: 10px;
        padding: 25px;
        background-color: rgb(145, 210, 79);
        color: black;
        opacity: 0.9;
    }
</style>