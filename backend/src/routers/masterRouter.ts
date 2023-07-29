import express, { Request, Response } from 'express';
import * as mastercontrollers from "../controllers/mastercontrollers"
const router = express.Router()

router.get('/getclassmaster', mastercontrollers.getClassmaster)
router.post('/addclassmaster', mastercontrollers.addClassmaster)

export default router