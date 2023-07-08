import express, { Request, Response } from "express"

export const getTestpages = async (req : Request , res : Response) => {
    res.status(200).send('Hello This is TEST')
}

