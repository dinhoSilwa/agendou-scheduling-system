
export interface rolesProps {
  role : string 
}

export interface businessTypesProps {
  type : string;
}

export interface AdminUserProps {
  adminname: string;
  email: string;
  password: string;
  phone : string,
  createdAt?: Date;
  updateAt?: Date;
}