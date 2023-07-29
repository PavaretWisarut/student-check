import express, { Request, Response, NextFunction } from "express"
import { Getclassmaster , AddclassMaster } from "../services/masterservices"
import { resultOK } from "../middleware/result";

export const getClassmaster = async (req: Request, res: Response, next:NextFunction ) => {
    try {
        const name = req.query.name
        const className = await Getclassmaster(name)
        resultOK(req, res, className, "เรียกดูข้อมูลระดับชั้นทั้งหมด")
    } catch (error) {
        next(error)
    }
}

export const addClassmaster = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const models = req.body
        const classmaster_id = await AddclassMaster(models)
        resultOK(req, res, classmaster_id, "เพิ่มข้อมูลระดับชั้นสำเร็จ")
    } catch (error) {
        next(error)
    }
}



