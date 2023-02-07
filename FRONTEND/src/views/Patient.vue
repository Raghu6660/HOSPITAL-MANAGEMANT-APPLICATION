<script setup>

</script>

<template>
    <div class="image" style="background-image: url('https://t4.ftcdn.net/jpg/01/83/20/03/240_F_183200379_GBy7AOXqDhSOcSfti4xyJbiOSCadtjf0.jpg');
    height: 100vh; background-size: cover">
        <center>
        <form class="paform" v-on:submit="register" @submit.prevent ="getFormValues">
            <center><h4>PATIENT REGISTER</h4></center><br>
            <input type="text" v-model="pa_data.firstName" name="firstName" placeholder="First Name"/><br><br>
            <input type="text" v-model="pa_data.lastName" name="lastName" placeholder="Last Name"/><br><br>
            <input type="text" v-model="pa_data.address" name="address" placeholder="Enter Address" /><br><br>
            <input type="tel" v-model="pa_data.mobile" name="mobile" placeholder="Mobile Number" /><br><br>
            <input type="text" v-model="pa_data.email" name="email" placeholder="Enter Email" /><br><br>
            <input type="text" v-model="pa_data.password" name="password" placeholder="Create Password" /><br><br>
            <input type="text" v-model="pa_data.symptoms" name="symptoms" placeholder="Specify Symptoms" /><br><br>
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
        name:"patient",
        data() {
            return{
                pa_data:{
                    firstName:"",
                    lastName:"",
                    address:"",
                    mobile:"",
                    email:"",
                    password:"",
                    symptoms:"",
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
                formData.append('firstName', this.pa_data.firstName );
                formData.append('lastName', this.pa_data.lastName);
                formData.append('address', this.pa_data.address);
                formData.append('moblie', this.pa_data.mobile);
                formData.append('email', this.pa_data.email);
                formData.append('password', this.pa_data.password);
                formData.append('symptoms', this.pa_data.symptoms); 
                formData.append('files', this.files);           
                try{
                let result =  await axios.post("http://127.0.0.1:5000/patient/signup",formData)
                    .then((res)=>{
                        console.log(res);
                        alert("Registration Successfull");
                        this.$router.push({path: '/patient'});
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
    .paform{
        width: 300px;
        height: 345px;
        background: linear-gradient(to top, rgba(14, 106, 176, 0.8)50%,rgba(14, 106, 176, 0.8)50%);
        position: absolute;
        top: 60px;
        left: 220px;
        border-radius: 10px;
        padding: 25px;
        background-color: rgb(145, 210, 79);
        color: black;
        opacity: 0.9;
    }
</style>
