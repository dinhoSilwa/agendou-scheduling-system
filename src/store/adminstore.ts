import { create } from "zustand";

interface AdminUserDetails {
  name: string;
  email: string;
}

interface AdmStoreProps {
  adminDetails: AdminUserDetails[];
  add: (adminName: string, adminEmail: string) => void;
  delete: (adminName: string) => void;
}

export const altenticationStore = create<AdmStoreProps>((set) => ({
  adminDetails: [],

  add: (adminName: string, adminEmail: string) => set((state) => ({
    adminDetails: [...state.adminDetails, { name: adminName, email: adminEmail }]
  })),

  delete: (adminName: string) => set((state) => ({
    adminDetails: state.adminDetails.filter((admin) => admin.name !== adminName)
  }))
}));
