import { Schema, model } from "mongoose";

interface AdmUserProps {
  name: string;
  email: string;
  password: string;
  role: string,
  avatar: string;
  createdAt: Date;
  updateAt: Date;

}
const admSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, required: true }
}, {
  timestamps: true
})

const AdmUser = model<AdmUserProps>('adm-user', admSchema)

export default AdmUser