import type { AdminUserProps } from "../@types/formsTypes"
import axios from 'axios';

const createuserurl = 'http://localhost:3001/admin/create'

export const createAdminUser = async (dataUser: AdminUserProps) => {
  const { adminname, email, password, phone } = dataUser

  try {
    const response = await axios.post(createuserurl, {
      adminname, email, password, phone
    })
    if (response.status === 201) {
      return response.data
    } else {
      throw new Error("Erro Desconhecido")
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }

}