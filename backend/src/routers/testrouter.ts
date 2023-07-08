import express, { Request, Response } from 'express';
import { getTestpages } from '../controllers/testpage';

const router = express.Router()

router.get('/test', getTestpages)

export default router