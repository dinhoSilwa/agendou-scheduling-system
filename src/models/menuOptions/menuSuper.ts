interface MenuOption {
  name: string;  
  action: string;  
}

interface MenuCategory {
  category: string;  
  options: MenuOption[]; 
}

export const menuItems: MenuCategory[] = [
  {
    category: "Estabelecimentos",
    options: [
      { name: "Lista", action: "addEstablishment" },
      { name: "Serviços", action: "viewEstablishments" },
      { name: "Agendamentos", action: "addEstablishment" },
    ]
  },

  {
    category: "Clientes",
    options: [
      { name: "Agendados", action: "viewUsers" },
      { name: "Fidelizados", action: "addUser" }
    ]
  },
  {
    category: "Configurações",
    options: [
      { name: "Gerais", action: "generalSettings" },
      { name: "Notificações", action: "notificationSettings" },
    ]
  },
  {
    category: "Relatórios",
    options: [
      { name: "Agendamentos", action: "appointmentReports" },
      { name: "Serviços", action: "serviceReports" }
    ]
  },
  {
    category: "Suporte",
    options: [
      { name: "Ajuda", action: "help" },
      { name: "Contato", action: "contactSupport" }
    ]
  },
  {
    category: "Perfil",
    options: [
      { name: "Meu Perfil", action: "viewProfile" },
      { name: "Configurações", action: "profileSettings" },
      { name: "Sair", action: "logout" }
    ]
  }
];
