import { Request, Response } from "express";
import AdmUser from "../models/adminuser";
import bcrypt from 'bcrypt';
 const saltRounds = 10;

export const createAdmUser = async (req : Request, res : Response) =>{
  try{
    const {name, email, password, role, avatar, storename, storeType} = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const admuser = new AdmUser({name,email, password : hashedPassword, role, avatar, storeType, storename});
    await admuser.save();
    res.status(201).json(admuser);
  } catch(error : any){
    res.status(400).json({message : error.message})
  }
}

