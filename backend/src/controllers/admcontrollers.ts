import { Request, Response } from "express";
import AdminUser from "../models/adminuser";
import bcrypt from 'bcrypt';
import type { AdminUserProps } from "../@types/globaltypes";
import { error } from "console";
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

export const getAdmin = async (req : Request, res : Response) =>{
try{

  const {email, password} = req.body
  const findAdminUser = await AdminUser.findOne({email})

  if(!findAdminUser){
    return res.status(404).json({error : "Email Não Encontrado"})
  }

  const ismatch = await bcrypt.compare(password, findAdminUser.password)

  if(!ismatch){
    return res.status(400).json({error : "Senha inválida"})
  }
  return res.status(200).json({msg : "Usuário Altenticado com Sucesso"})


}catch(error){
  console.error(error)
  return res.status(500).json({error : "Erro interno , tente novamente Em alguns minutos"})
}
}

