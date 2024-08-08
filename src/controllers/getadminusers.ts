
import axios from "axios"
import type { AdminUserLoginProps } from "../@types/formsTypes"
const createuserurl = 'http://localhost:3001/admin/getadimin'

export const getAdminUser = async (data : AdminUserLoginProps) =>{

  const {email , password} = data

  const response = await axios.post(createuserurl,{
    email,password
  })
 return response

}