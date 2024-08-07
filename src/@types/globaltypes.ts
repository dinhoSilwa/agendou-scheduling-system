export interface AdmUserProps {
  name: string | undefined;
  email: string | undefined;
  phone : string | undefined;
  password: string | undefined;
  // role?: string | undefined,
  avatar?: string | undefined;
  storename : string | undefined,
  storeType : string | undefined,
  createdAt?: Date;
  updateAt?: Date;

}