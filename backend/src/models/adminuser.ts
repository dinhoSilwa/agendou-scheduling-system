import { Schema, model } from "mongoose";
import type { AdminUserProps } from "../@types/globaltypes";

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone : {type : String, required : true}

}, {
  timestamps: true
})

const AdminUser = model<AdminUserProps>('adm-user', adminSchema)

export default AdminUser