import express, { Request, Response, NextFunction } from "express"
import { GetMember , GetMemberById } from "../services/memberservices"
import { resultOK } from "../middleware/result";

export const getMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.query.name
        const user = await GetMember(name)
        resultOK(req, res, user, `เรียกดูข้อมูลสมาชิกทั้งหมด`)
    } catch (error) {
        next(error)
    }
}

export const getMemberById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const user = await GetMemberById(id)
        resultOK(req, res, user, `เรียกดูข้อมูลสมาชิก Id : ${id}`)
    } catch (error) {
        next(error)
    }
}

