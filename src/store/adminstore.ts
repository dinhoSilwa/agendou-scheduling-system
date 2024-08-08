import { create } from "zustand";

export interface AdminUserDetails {
  adminName: string;
  adminEmail: string;
}

interface AdmStoreProps {
  adminDetails: AdminUserDetails | null;
  add: (adminName: string, adminEmail: string) => void;
  deleteAdmin: () => void;
}

export const authenticationStore = create<AdmStoreProps>((set) => ({
  adminDetails: null,
  add: (adminName: string, adminEmail: string) => set({
    adminDetails: { adminName, adminEmail }
  }),

  deleteAdmin: () => set({ adminDetails: null })
}));
