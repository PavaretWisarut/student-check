import express, { Request, Response } from "express"
import { query } from '../config/database';
import { v4 as uuidv4 } from "uuid"

export const ValidateEmail = async(email) =>{
    const sql = 'select * from members where email = ?';
    return query(sql, email)
}

export const Register = async (models , hashpassword) => {
    const id = uuidv4()
    const sql = `INSERT INTO members (id, email, password, fistname, lastname, age, create_by, create_date, update_by, update_date)
                VALUES(?,?,?,?,?,?,?,?,?,?);`;
    const values = [
        id,
        models.email,
        hashpassword,
        models.firstname,
        models.lastname,
        models.age,
        id,
        new Date(),
        id,
        new Date(),
    ];

    query(sql, values)

    return id
}
