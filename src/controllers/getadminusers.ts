
import axios from "axios"
import type { AdminUserLoginProps } from "../@types/formsTypes"
import { AdminUserDetails } from "../store/adminstore"
const createuserurl = 'http://localhost:3001/admin/getadimin'

export const getAdminUser = async (data : AdminUserLoginProps) =>{

  const {email , password} = data

  const response = await axios.post<AdminUserDetails>(createuserurl,{
    email,password
  })
 return response

}