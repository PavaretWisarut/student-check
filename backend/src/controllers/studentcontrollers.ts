import express, { Request, Response , NextFunction  } from "express"
import { GetStudents, GetStudentById, Addstudents, UpdateStudent, DeleteStudent } from "../services/studentservices"
import { resultOK } from "../middleware/result";

export const getStudents = async (req: Request, res: Response, next:NextFunction ) => {
    try {
        const name = req.query.name
        const users = await GetStudents(name)
        resultOK(req, res, users, "เรียกดูข้อมูลนักเรียนทั้งหมด")
    } catch (error) {
        next(error)
    }
}

export const getStudentById = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { id } = req.params
        const user = await GetStudentById(id)
        resultOK(req, res, user, `เรียกดูข้อมูลนักเรียน Id : ${id}`)
    } catch (error) {
        next(error)
    }
}

export const addStudent = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const models = req.body
        const addStudent = await Addstudents(models)
        resultOK(req, res, addStudent, "เพิ่มข้อมูลนักเรียนสำเร็จ")
    } catch (error) {
        next(error)
    }
}

export const updateStudent = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const models = req.body
        const updateStudent = await UpdateStudent(models)
        resultOK(req, res, updateStudent, "อัปเดทข้อมูลนักเรียนสำเร็จ")
    } catch (error) {
        next(error)
    }
}

export const deleteStudent = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { id } = req.params
        console.log(id);
        const deleteStudent = await DeleteStudent(id)
        resultOK(req, res, deleteStudent, "ลบข้อมูลนักเรียนสำเร็จ")
    } catch (error) {
        next(error)
    }
}


