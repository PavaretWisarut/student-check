import express, { Request, Response } from "express"
import { query } from '../config/database';

export const GetMember = async (name) => {
    let sql = 'SELECT * FROM members ';
    if (name){
        sql += `WHERE fistname like '%${name}%' `
    }
    sql += 'ORDER BY create_date DESC'
    console.log(sql);
    
    return query(sql)
}

export const GetMemberById = async (id) => {
    const sql = 'SELECT * FROM members WHERE id = ? ORDER BY create_date DESC';
    return query(sql, id)
}

