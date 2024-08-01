import { Schema, model } from "mongoose";
import type { AdmUserProps } from "../@types/globaltypes";

const admSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, required: false },
  storename : {type : String, required : true},
  storeType : {type : String, required : true},
}, {
  timestamps: true
})

const AdmUser = model<AdmUserProps>('adm-user', admSchema)

export default AdmUser