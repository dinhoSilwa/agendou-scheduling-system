import { Request, Response } from "express";
import AdmUser from "../models/adminuser";

export const createAdmUser = async (req : Request, res : Response) =>{
  try{
    const {name, email, password, role, avatar} = req.body;
    const admuser = new AdmUser({name,email, password, role, avatar});
    await admuser.save();
    res.status(201).json(admuser);
  } catch(error : any){
    res.status(400).json({message : error.message})
  }
}

