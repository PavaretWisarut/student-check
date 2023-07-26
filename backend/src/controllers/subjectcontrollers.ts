import express, { Request, Response, NextFunction } from "express"
import { GetSubject, GetSubjectById, AddSubject, UpdateSubject, DeleteSubject } from "../services/subjectservices"
import { resultOK } from "../middleware/result";

export const getSubject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const subjects = await GetSubject()
        resultOK(req, res, subjects, "เรียกดูข้อมูลวิชาทั้งหมด")
    } catch (error) {
        next(error)
    }
}

export const getSubjectById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const subjects = await GetSubjectById(id)
        resultOK(req, res, subjects, `เรียกดูข้อมูลวิชา Id : ${id}`)
    } catch (error) {
        next(error)
    }
}

export const addSubject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const models = req.body
        const addSubject = await AddSubject(models)
        resultOK(req, res, addSubject, "เพิ่มข้อมูลวิชาสำเร็จ")
    } catch (error) {
        next(error)
    }
}

export const updateSubject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const models = req.body
        const updateSubject = await UpdateSubject(models)
        resultOK(req, res, updateSubject, "อัปเดทข้อมูลวิชาสำเร็จ")
    } catch (error) {
        next(error)
    }
}

export const deleteSubject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const updateStudent = await DeleteSubject(id)
        resultOK(req, res, updateStudent, "ลบข้อมูลวิชาสำเร็จ")
    } catch (error) {

    }
}