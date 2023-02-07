import express from 'express';
import { authController } from '../controllers/authController.js';
import {DoctorController} from '../controllers/doctorController.js';
const router = express.Router();

// router.post('/doctor', authController.doctorLoginPost);


// router.get('/doctor',DoctorController.doctorfetch);

export default router;