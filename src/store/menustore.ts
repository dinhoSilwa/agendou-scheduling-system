import { create } from "zustand";

interface IsOpenMenu {
  isOpen: boolean;
  toggleIsOpen: () => void; // Função para alternar o estado
}

// Criação do store Zustand
export const useOpenToggle = create<IsOpenMenu>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })) // Alterna o estado
}));
