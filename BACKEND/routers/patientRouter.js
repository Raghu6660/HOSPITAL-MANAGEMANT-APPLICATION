import express from 'express';
import { authController } from '../controllers/authController.js';
import {PatientController} from '../controllers/patientController.js';
const router = express.Router();

// router.post('/patient', authController.patientLoginPost);


// router.get('/patient',PatientController.patientfetch);

export default router;