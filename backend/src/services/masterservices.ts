import express, { Request, Response } from "express"
import { query } from '../config/database';
import { v4 as uuidv4 } from "uuid"

export const Getclassmaster = async (name) => {
    let sql = 'select id , name from classmaster ';
    if (name) {
        sql += `WHERE name like '%${name}%' `
    }
    sql += 'ORDER BY create_date ASC'
    console.log(sql);

    return query(sql)
}

export const AddclassMaster = async (models) => {
    const id = uuidv4()
    const sql = `INSERT INTO classmaster (id, name, create_by, create_date, update_by, update_date)
                VALUES(?,?,?,?,?,?);`;
    const values = [
        id,
        models.name,
        id, // uuid from token fix later !!!
        new Date(),
        id, // uuid from token fix later !!!
        new Date(),
    ];

    query(sql, values)

    return id
}
