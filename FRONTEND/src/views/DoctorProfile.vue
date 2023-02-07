<script setup>
    import Logout from '../components/LogoutNav.vue'
</script>

<template>
    <Logout/>
    <div class="B">  
            <div class="photo">
                <p>{{ this.drphoto }}</p>
            </div>
            <div class="name">
                <p>{{this.drname}}</p>
            </div>
                <ul style="list-style-type:none;">
                    <li><RouterLink to="/doctor/profile/patient" class="A"><b>Patients</b></RouterLink></li>
                    <li><RouterLink to="/doctor/profile/Appointment" class="A"><b>Appointments</b></RouterLink></li>
                </ul>
        </div>  

        <div class="C">  
            <div class="patient">
                <table cellspacing="0" cellpadding="0" border="0" width="460">
                        <caption>YOUR PATIENTS</caption>
                        <tr>
                            <td>
                            <table cellspacing="0" cellpadding="1" border="1" width="460" >
                                <tr style="color:white;background-color:grey">
                                    <th>PATIENTS</th>
                                    <th>SYMPTOMS</th>
                                    <th>MOBILE</th>
                                    <th>EMAIL</th>
                                </tr>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div style="width:460px; height:160px; overflow:auto;">
                                <table cellspacing="0" cellpadding="1" border="1" width="450" >
                                <tr v-for="dr in drlist" v-bind:key="dr._id" > 
                                    <td style="width:30%">{{ pa.firstName }}</td>
                                    <td style="width:48%">{{ pa.symptoms }}</td>
                                    <td style="width:30%">{{ pa.mobile }}</td>
                                    <td style="width:48%">{{ pa.email }}</td>
                                    <td ><button>acepct</button></td>
                                </tr>
                                </table>  
                            </div>
                            </td>
                        </tr>
                </table>
            </div>
        </div>  
</template>


<script>
    import axios from 'axios';
    export default {
        name: 'doctorprofile',
        data(){
            return{
                drphoto:"",
                drname:"",
                palist:""
            };
        },
        mounted() {
            this.drname = localStorage.getItem('name');
            this.drphoto = localStorage.getItem('photo'); 
        },
        methods:{

        }
        
    }
</script>




<style>
.A{
        color: black;
        border-radius: 3px;
        border: 1px solid rgb(102, 97, 97);
        font: 1em Arial, sans-serif;
        font-size: 13px;
        line-height: 2.5em;
        background-color: goldenrod;
        margin-left: 50px;
        
    }
.B{
    background-color: rgb(170, 212, 196);
    width: 18%;
    height: 434px;
    float:left;
}
.C{
    background-color: rgb(214, 232, 125);
    width:82%;
    height: 430px;
    float:left;
}
.photo{
    margin-top: 70px;
    margin-left: 35px;
    background-color: rgb(41, 50, 155);
    width:50%;
    height: 100px;
    text-align: center;
    align-content: center;
}
.name{
    margin-top: 20px;
    margin-left: 15px;
    background-color: rgb(163, 168, 221);
    width:80%;
    height: 20px;
    text-align: center;
    align-content: center;
    margin-bottom: 20px;
}
.patient{
        color: #000;
        background-color: burlywood;
        margin-top : 130px;
        /* margin-right: -5px; */
        margin-left: 150px;
        height: 200px;
        width: 460px;
}
</style>