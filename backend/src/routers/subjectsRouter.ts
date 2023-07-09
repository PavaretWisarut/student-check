import express, { Request, Response } from 'express';
import * as subjectcontroller from '../controllers/subjectcontrollers';

const router = express.Router()

router.get('/getsubjects', subjectcontroller.getSubject)
router.get('/getsubjects/:id', subjectcontroller.getSubjectById)
router.post('/addsubjects', subjectcontroller.addSubject)
router.put('/updatesubjects', subjectcontroller.updateSubject)
router.delete('/deletesubjects/:id', subjectcontroller.deleteSubject)

export default router