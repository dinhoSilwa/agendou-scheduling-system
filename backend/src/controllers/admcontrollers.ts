import { Request, Response } from "express";
import AdminUser from "../models/adminuser";
import bcrypt from 'bcrypt';
 const saltRounds = 10;

export const createAdmin = async (req : Request, res : Response) =>{
  try{
    const {name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const admuser = new AdminUser({name,email, password : hashedPassword});
    await admuser.save()
    res.status(201).json(admuser);
  } catch(error : any){
    res.status(400).json({message : error.message})
  }
}

