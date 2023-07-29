import express, { Request, Response } from 'express';
import * as membercontroller from "../controllers/memberscontroller"

const router = express.Router()

router.get('/getmember', membercontroller.getMember)
router.get('/getmember/:id', membercontroller.getMemberById)


export default router