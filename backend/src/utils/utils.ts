import bcrypt from "bcrypt"
import { resultOK } from "../middleware/result";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const encryptPassword = (password: string) => {
    let saltRounds = 5
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash
}

export const comparePassword = (password: string, hash: string) => {
    let comparePW = bcrypt.compareSync(password, hash)
    return comparePW
}

export const GenToken = (data) => {
    let token = jwt.sign(data, process.env.JWT_SECRETKEY, {
        expiresIn: process.env.EXPIRE_IN,
    });
    return token
}

export const GenRefreshToken = (data) => {
    let token = jwt.sign(data, process.env.JWT_REFRESH_SECRETKEY,);
    return token
}

export const DecodeACToken = (ACtoken) => {
    let token = jwt.verify(ACtoken, process.env.JWT_SECRETKEY);
    return token
}
