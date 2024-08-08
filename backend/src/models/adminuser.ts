import { Schema, model } from "mongoose";
import type { AdminUserProps } from "../@types/globaltypes";

const adminSchema = new Schema({
  adminname : {type : String, required : true},
  email: { type: String, required: true, unique: true , match: /^\S+@\S+\.\S+$/ },
  password: { type: String, required: true, unique: true  },
  phone : {type : String, required : true,  match: /^\d{10,11}$/}

}, {
  timestamps: true
})

adminSchema.index({ adminname: 'text', email: 'text' });
const AdminUser = model<AdminUserProps>('adm-user', adminSchema)

export default AdminUser