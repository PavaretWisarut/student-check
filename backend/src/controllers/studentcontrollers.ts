import express, { Request, Response } from "express"
import { GetStudents, GetStudentById , Addstudents, UpdateStudent, DeleteStudent } from "../services/studentservices"
import { resultOK } from "../middleware/result";

export const getStudents = async (req: Request, res: Response) => {
    const name = req.query.name
    const users = await GetStudents(name)
    resultOK(req, res, users, "เรียกดูข้อมูลนักเรียนทั้งหมด")
}

export const getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await GetStudentById(id)
    resultOK(req, res, user, `เรียกดูข้อมูลนักเรียน Id : ${id}`)
}

export const addStudent = async (req: Request, res: Response) => {
    const models = req.body
    const addStudent = await Addstudents(models)
    resultOK(req, res, addStudent, "เพิ่มข้อมูลนักเรียนสำเร็จ")
}

export const updateStudent = async (req: Request, res: Response) => {
    const models = req.body
    const updateStudent = await UpdateStudent(models)
    resultOK(req, res, updateStudent, "อัปเดทข้อมูลนักเรียนสำเร็จ")
}

export const deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id);
    const deleteStudent = await DeleteStudent(id)
    resultOK(req, res, deleteStudent, "ลบข้อมูลนักเรียนสำเร็จ")
}


