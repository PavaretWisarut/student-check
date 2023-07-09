import express, { Request, Response } from 'express';
import studentsRouter from "./routers/studentsRouter"
import subjectsRouter from "./routers/subjectsRouter"

const router = express.Router()

router.use('/api/student', studentsRouter)
router.use('/api/subject', subjectsRouter)

export default router