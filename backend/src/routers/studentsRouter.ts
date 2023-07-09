import express, { Request, Response } from 'express';
import * as studentcontrollers from '../controllers/studentcontrollers';

const router = express.Router()

router.get('/getstudents', studentcontrollers.getStudents)
router.get('/getstudents/:id', studentcontrollers.getStudentById)
router.post('/addstudent', studentcontrollers.addStudent)
router.put('/updatestudent', studentcontrollers.updateStudent)
router.delete('/deletestudent/:id', studentcontrollers.deleteStudent)

export default router