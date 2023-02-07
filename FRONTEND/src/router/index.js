import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/Admin.vue'
import AdminView from '../views/AdminView.vue'
import Doctor from '../views/Doctor.vue'
import DoctorView from '../views/DoctorView.vue'
import Patient from '../views/Patient.vue'
import PatientView from '../views/PatientView.vue'
import Home from '../components/Home.vue'
import AdminProfile from '../views/AdminProfile.vue'
import DoctorProfile from '../views/DoctorProfile.vue'
import PatientProfile from '../views/PatientProfile.vue'
import AdminDoctor from '../views/AdminDoctor.vue'
import AdminPatient from '../views/AdminPatient.vue'
import AdminAppoint from '../views/AdminAppoint.vue'
import DoctorPatient from '../views/DoctorPatient.vue'
import DoctorAppoint from '../views/DoctorAppoint.vue'
import PatientAppoint from '../views/PatientAppoint.vue'
import PatientDischarge from '../views/PatientDischarge.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/admin/signup',
      name: 'admin_signup',
      component: Admin
    },
    {
      path: '/admin/profile',
      name: 'adminprofile',
      props: true,
      component: AdminProfile
    },
    {
      path:'/admin/profile/doctor',
      name: 'admin_doctor',
      component: AdminDoctor
    },
    {
      path:'/admin/profile/patient',
      name: 'admin_patient',
      component: AdminPatient
    },
    {
      path:'/admin/profile/appointment',
      name: 'admin_appoint',
      component: AdminAppoint
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: DoctorView
    },
    {
      path: '/doctor/signup',
      name: 'doctor_signup',
      component: Doctor
    },
    {
      path: '/doctor/profile',
      name: 'doctorprofile',
      component: DoctorProfile
    },
    {
      path:'/doctor/profile/patient',
      name: 'doctor_patient',
      component: DoctorPatient
    },
    {
      path:'/doctor/profile/appointment',
      name: 'doctor_appoint',
      component: DoctorAppoint
    },
    {
      path: '/patient',
      name: 'patient',
      component: PatientView
    },
    {
      path: '/patient/signup',
      name: 'patient_signup',
      component: Patient
    },
    {
      path: '/patient/profile',
      name: 'patientprofile',
      component: PatientProfile
    },
    {
      path:'/patient/profile/appointment',
      name: 'patient_appointments',
      component: PatientAppoint
    },
    {
      path:'/patient/profile/discharge',
      name: 'patient_discharge',
      component: PatientDischarge
    },
    {
      path:'/logout',
      name: 'logot',
      component: Home
    }
  ]
})

export default router