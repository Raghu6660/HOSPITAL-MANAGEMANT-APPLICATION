import express from 'express';
import { authController } from '../controllers/authController.js';
import {AdminController} from '../controllers/adminController.js';
const router = express.Router();

// router.post('/admin', authController.adminLoginPost);

// router.post('/admin/signup', authController.adminSignupPost);


// router.get('/admin', AdminController.adminfetch);

export default router;