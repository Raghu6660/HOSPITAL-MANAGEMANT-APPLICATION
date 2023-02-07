<script setup>
    import Logout from '../components/LogoutNav.vue'
</script>

<template>
    <Logout/>
    <div class="B">  
            <div class="photo">
                <p>{{ this.photo }}</p>
            </div>
            <div class="name">
                <p>{{ this.paname }}</p>
            </div>
                <ul style="list-style-type:none;">
                    <li><RouterLink to="/patient/profile/appointment" class="A"><b>Appointments</b></RouterLink></li>
                    <li><RouterLink to="/patient/profile/discharge" class="A"><b>Discharge</b></RouterLink></li>
                </ul>
        </div>  

        <div class="C">  
                <p> This is the second division to have a vertical alignment. </p> 
        </div>  
</template>


<script>
import axios from 'axios';
export default{
    name: 'patientprofile',
    data(){
        return{
            paname:"",
            photo:""
        };
    },
    mounted(){
        this.paname = localStorage.getItem('name');
        this.photo = localStorage.getItem('photo');
    }
}
</script>




<style>
</style>