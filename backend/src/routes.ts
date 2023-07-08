import express, { Request, Response } from 'express';
import testRouter from "./routers/testrouter"

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, World! This is type script');
});

router.use('/api', testRouter)

export default router