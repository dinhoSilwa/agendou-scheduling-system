import { Request, Response } from "express";
import AdminUser from "../models/adminuser";
import bcrypt from 'bcrypt';
 const saltRounds = 10;

export const createAdmin = async (req : Request, res : Response) =>{
  try{
    const {adminname, email, password, phone} = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const admuser = new AdminUser({adminname,email,phone, password : hashedPassword});
    await admuser.save()
    res.status(201).json(admuser);
    console.log("Criado com Sucesso")
  } catch(error : any){
    res.status(400).json({message : error.message})
    console.log("Falha ao Criar")
  }
}

