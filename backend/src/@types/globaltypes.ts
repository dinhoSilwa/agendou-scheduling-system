export interface AdminUserProps {
  name: string;
  email: string;
  password: string;
  phone : string,
  createdAt?: Date;
  updateAt?: Date;
}

export interface AddressAdmProps {
    city: string;
    state: string;
    street: string;
    number: string;
    postalcode: string;
    complement?: string; // Opcional
    phone?: string; // Opcional
    country: string;
    latitude?: number; // Opcional
    longitude?: number; // Opcional
    openingHours?: string; // Opcional
  
}