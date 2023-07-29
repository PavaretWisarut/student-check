import express, { Request, Response } from 'express';
import studentsRouter from "./routers/studentsRouter"
import subjectsRouter from "./routers/subjectsRouter"
import authRouter from "./routers/authRouter"
import membersRouter from "./routers/membersRouter"
import masterRouter from "./routers/masterRouter"

const router = express.Router()

router.use('/api/student', studentsRouter)
router.use('/api/subject', subjectsRouter)
router.use('/api/auth', authRouter)
router.use('/api/member', membersRouter)
router.use('/api/master', masterRouter)

export default router