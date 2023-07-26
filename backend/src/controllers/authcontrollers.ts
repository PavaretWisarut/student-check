import express, { Request, Response, NextFunction } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { encryptPassword, comparePassword , GenToken , GenRefreshToken , DecodeACToken} from "../utils/utils"
import { ValidateEmail, Register } from "../services/authservices"
import { resultOK, resultError } from "../middleware/result";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const models = req.body
        const hash = await encryptPassword(models.password)
        let id = await Register(models, hash)
        resultOK(req, res, id, "สมัครสมาชิกสำเร็จแล้ว")
    } catch (error) {
        next(error)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const models = req.body
        const validateEmail = await ValidateEmail(models.email)
        if (validateEmail.length > 0) {
            let hastpassword = validateEmail[0].password
            let comparePW = comparePassword(models.password, hastpassword)
            if (comparePW) {

                const data_model = {
                    id: validateEmail[0].id,
                    email: validateEmail[0].email,
                    firstname : validateEmail[0].fistname,
                    lastname : validateEmail[0].lastname,
                }

                const accesstoken = await GenToken(data_model)
                const refreshtoken = await GenRefreshToken(data_model)

                const expireACtoken =  await DecodeACToken(accesstoken)
               
                const res_data = {
                    accesstoken: accesstoken,
                    refreshtoken: refreshtoken,
                    expire_in : expireACtoken.exp
                }

                resultOK(req, res, res_data, "เข้าสู่ระบบสำเร็จ")
            } else {
                resultError(req, res, 400, "อีเมลหรือรหัสผ่านไม่ถูกต้อง")
            }
        } else {
            resultError(req, res, 400, "ไม่พบอีเมลนี้ในฐานระบบ")
        }
    } catch (error) {
        next(error)
    }
}

