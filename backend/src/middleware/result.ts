import express, { Request, Response } from "express"

export const resultOK = async (req: Request,res :Response , data:any, msg:string ) =>{
    return res.status(200).json(
        {code : 200,
        data: data,
        message : msg,
        status : true
    }
    )
}