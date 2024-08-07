export interface AddressProps {
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
