<script setup>
    import {RouterView, RouterLink } from 'vue-router';
    import Logout from '../components/LogoutNav.vue'
</script>

<template>
    <Logout/>
    <div class="B">  
            <div class="photo">
                <p>{{ this.photo }}</p>
            </div>
            <div class="name">
                <p>{{ this.adname }}</p>
            </div>
                <ul style="list-style-type:none;">
                    <li><RouterLink to="/admin/profile/doctor" class="A"><b>Doctors</b></RouterLink></li>
                    <li><RouterLink to="/admin/profile/patient" class="A"><b>Patients</b></RouterLink></li>
                    <li><RouterLink to="/admin/profile/appointment" class="A"><b>Appointments</b></RouterLink></li>
                </ul>
        </div>  

        <div class="C">  
            <div class="drt">
            <table cellspacing="0" cellpadding="0" border="0" width="325">
                <caption>RECENT DOCTORS</caption>
                <tr>
                    <td>
                    <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr style="color:white;background-color:grey">
                            <th>DOCTORS</th>
                            <th>SPECILIZATION</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div style="width:345px; height:159px; overflow:auto;">
                        <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr v-for="dr in drlist" v-bind:key="dr._id" > 
                             <td style="width:30%">{{ dr.firstName }}</td>
                            <td style="width:48%">{{ dr.spec }}</td>
                            <td ><button>acepct</button></td>
                        </tr>
                        </table>  
                    </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="pat">
            <table cellspacing="0" cellpadding="0" border="0" width="325">
                <caption>RECENT PATIENTS</caption>
                <tr>
                    <td>
                    <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr style="color:white;background-color:grey">
                            <th>PATIENTS</th>
                            <th>SYMPTOMS</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div style="width:345px; height:159px; overflow:auto;">
                        <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr v-for="pa in palist" v-bind:key="pa._id" > 
                             <td style="width:34%">{{ pa.firstName }}</td>
                            <td style="width:41%">{{ pa.symptoms }}</td>
                            <td ><button>acepct</button></td>
                        </tr>
                        </table>  
                    </div>
                    </td>
                </tr>
            </table>
        </div> 
    </div>
    <!-- <div class="a">
        <div class="im">
            <p>{{ photo }}</p>
            <p>photophoto</p>
        </div>
        <div>{{ adname }}</div>
        <div class="name">adname</div>
        <div class="links">
            <nav>
                <ul style="list-style-type:none;">
                    <li><RouterLink to="/admin/profile/doctor" class="c"><b>Doctors</b></RouterLink></li>
                    <li><RouterLink to="/admin/profile/patient" class="c"><b>Patients</b></RouterLink></li>
                    <li><RouterLink to="/admin/profile/appointment" class="c"><b>Appointments</b></RouterLink></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="b">
        <div class="drt">
            <table cellspacing="0" cellpadding="0" border="0" width="325">
                <tr>
                    <td>
                    <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr style="color:white;background-color:grey">
                            <th>DOCTORS</th>
                            <th>SPECILIZATION</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div style="width:345px; height:159px; overflow:auto;">
                        <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr v-for="dr in drlist" v-bind:key="dr._id" > 
                             <td style="width:30%">{{ dr.firstName }}</td>
                            <td style="width:48%">{{ dr.spec }}</td>
                            <td ><button>acepct</button></td>
                        </tr>
                        </table>  
                    </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="drt">
            <table cellspacing="0" cellpadding="0" border="0" width="325">
                <tr>
                    <td>
                    <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr style="color:white;background-color:grey">
                            <th>PATIENTS</th>
                            <th>SYMPTOMS</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div style="width:345px; height:159px; overflow:auto;">
                        <table cellspacing="0" cellpadding="1" border="1" width="345" >
                        <tr v-for="pa in palist" v-bind:key="pa._id" > 
                             <td style="width:34%">{{ pa.firstName }}</td>
                            <td style="width:41%">{{ pa.symptoms }}</td>
                            <td ><button>acepct</button></td>
                        </tr>
                        </table>  
                    </div>
                    </td>
                </tr>
            </table>
        </div>
    </div> -->
    
</template>


<script>
import axios from 'axios';
export default {
    name: 'adminprofile',
    data(){
        return{
            photo:"",
            adname:"",
            drlist:"",
            palist:""
        };
    },
    mounted() {
        this.adname = localStorage.getItem('name');
        this.photo = localStorage.getItem('photo'); 
    },
    
}
</script>




<style>
    .a{
        text-align: center;
        font-size: 10px;
        color: rgb(0, 0, 0);
        padding: 10px;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        height: 414px;
        width:15.08%;
        background-color:rgb(50, 128, 205);
        float: left;
    }
    .b{
        /* text-align: center; */
        font-size: 10px;
        color: rgb(0, 0, 0);
        padding: 10px;
        display: flex;
        /* align-items: center; */
        justify-content: center;
        height: 410px;
        width: 80.51%;
        background-color:rgb(92, 144, 192);
        float: right;
    }
    .drt{
        color: #000;
        background-color: burlywood;
        margin-top : 130px;
        /* margin-right: -5px; */
        margin-left: 15px;
        height: 180px;
        width: 360px;
    }
    .pat{
        color: #000;
        background-color: burlywood;
        margin-top : -180px;
        /* margin-right: -5px; */
        margin-left: 385px;
        height: 180px;
        width: 360px;
    }
    .e{
        color: #000;
    }
    .im{
        align-items: center;
        width: 70px;
        height: 70px;
        justify-content: center;
        border-radius: 50%;
        background-color: black;
        display: flex;
        margin-top: 30%;
        margin-left: 80px;
        margin-right: 30%;
    }
    .links{
        margin-top: 120%;
        margin-left: -120px;
        height: 40%;
        margin-right: 60%;
    
        /*background-color: aquamarine;*/
    }
    table {
            margin-left: auto;
            margin-right: auto;
            /* font-size: 20px;
            height: 100%;
            table-layout: fixed; */
    }
    td{
        text-align: center;
    }
</style>