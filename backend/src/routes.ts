import express, { Request, Response } from 'express';
import studentsRouter from "./routers/studentsRouter"
import subjectsRouter from "./routers/subjectsRouter"
import authRouter from "./routers/authRouter"

const router = express.Router()

router.use('/api/student', studentsRouter)
router.use('/api/subject', subjectsRouter)
router.use('/api/auth', authRouter)

export default router