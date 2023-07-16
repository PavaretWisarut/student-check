import express, { Request, Response } from "express"
import { query } from '../config/database';
import { v4 as uuidv4 } from "uuid"

export const GetStudents = async (name) => {
    let sql = 'SELECT * FROM student ';
    if (name){
        sql += `WHERE firstname like '%${name}%' `
    }
    sql += 'ORDER BY create_date DESC'
    console.log(sql);
    
    return query(sql)
}

export const GetStudentById = async (id) => {
    const sql = 'SELECT * FROM student WHERE id = ? ORDER BY create_date DESC';
    return query(sql, id)
}

export const Addstudents = async (models: any) => {
    const id = uuidv4()
    const sql = `INSERT INTO student (id, firstname, lastname, email , age, create_date, create_by, update_date, update_by)
               VALUES (?, ?, ?, ?, ?, ?, ?,?, ?)`;
    const values = [
        id,
        models.firstname,
        models.lastname,
        models.email,
        models.age,
        new Date(),
        id,
        new Date(),
        id,
    ];

    query(sql, values)

    return id
}

export const UpdateStudent = async (models: any) => {
    const id = models.id;
    const sql = `UPDATE student SET firstname = ?, lastname = ?, email= ?, age = ?, update_date = ?, update_by = ?
               WHERE id = ?`;
    const values = [
        models.firstname,
        models.lastname,
        models.email,
        models.age,
        new Date(),
        id,
        id,
    ];

    await query(sql, values);

    return id;
}

export const DeleteStudent = async (id:any) => {
    const sql = `DELETE FROM student WHERE id = ?`;

    await query(sql, id);

    return id;
}