export interface AdmUserProps {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role?: string | undefined,
  avatar?: string | undefined;
  storename : string | undefined,
  storeType : String | undefined,
  createdAt?: Date;
  updateAt?: Date;

}