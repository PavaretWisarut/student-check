import express, { Request, Response } from 'express';
import * as authcontrollers from '../controllers/authcontrollers';

const router = express.Router()

router.post('/register', authcontrollers.register)
router.post('/login', authcontrollers.login)

export default router