import express, { Request, Response } from "express"
import { query } from '../config/database';
import { v4 as uuidv4 } from "uuid"

export const GetSubject = async () => {
    const sql = 'SELECT * FROM subject ORDER BY create_date ASC';
    return query(sql)
}

export const GetSubjectById = async (id) => {
    const sql = 'SELECT * FROM subject WHERE id = ? ORDER BY create_date ASC';
    return query(sql, id)
}


export const AddSubject = async (models: any) => {
    const id = uuidv4()
    const sql = `INSERT INTO subject (id, subject_name	, student_id, credit, members_id ,RoomNo,  create_date, create_by, update_date, update_by)
               VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)`;
    const values = [
        id,
        models.subject_name,
        models.student_id,
        models.credit,
        models.members_id,
        models.roomno,
        new Date(),
        id, // Uid from token That will fix later !!
        new Date(),
        id, // Uid from token That will fix later !!
    ];

    query(sql, values)

    return id
}

export const UpdateSubject = async (models: any) => {
    const id = models.id;
    const sql = `UPDATE subject SET subject_name = ?, student_id = ?, credit = ?, members_id = ?, RoomNo = ?, update_date = ?, update_by = ? WHERE id = ?`;
    const values = [
        models.subject_name,
        models.student_id,
        models.credit,
        models.members_id,
        models.roomno,
        new Date(),
        models.members_id, // Fixed the placeholder to update_by
        id,
    ];

    await query(sql, values);

    return id;

}

export const DeleteSubject = async (id: any) => {
    const sql = `DELETE FROM subject WHERE id = ?`;

    await query(sql, id);

    return id;
}
