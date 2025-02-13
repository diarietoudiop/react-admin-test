import { 
    Layout, 
    Menu,
    TextInput,
    Sidebar
  } from 'react-admin';
  import { 
    Search, 
    LayoutDashboard, 
    FileText, 
    Users,
    Settings 
  } from 'lucide-react';
  
  // Composant de barre de recherche personnalisée
  const CustomSearchInput = props => (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <TextInput
        {...props}
        className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        placeholder="Rechercher..."
        resettable={false}
      />
    </div>
  );
  
  // Composant de menu personnalisé
  const CustomMenu = (props) => (
    <Menu {...props}>
      <Menu.DashboardItem
        leftIcon={<LayoutDashboard size={20} />}
        primaryText="Tableau de bord"
        className="hover:bg-blue-50 transition-colors duration-200 rounded-lg mb-1 font-medium"
      />
      
      <Menu.Item
        to="/posts"
        primaryText="Articles"
        leftIcon={<FileText size={20} />}
        className="hover:bg-blue-50 transition-colors duration-200 rounded-lg mb-1 font-medium"
      />
      
      <Menu.Item
        to="/users"
        primaryText="Utilisateurs"
        leftIcon={<Users size={20} />}
        className="hover:bg-blue-50 transition-colors duration-200 rounded-lg mb-1 font-medium"
      />
  
      <Menu.Item
        to="/settings"
        primaryText="Paramètres"
        leftIcon={<Settings size={20} />}
        className="hover:bg-blue-50 transition-colors duration-200 rounded-lg mb-1 font-medium mt-4"
      />
    </Menu>
  );
  
  // Composant Sidebar personnalisé
  const CustomSidebar = (props) => (
    <Sidebar {...props} className="shadow-lg">
      <div className="p-3">
        {/* Logo ou titre de l'application */}
        <div className="px-4 py-6 mb-6">
          <h1 className="text-2xl font-bold text-blue-600">Mon Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Interface d'administration</p>
        </div>
        
        {/* Menu personnalisé */}
        <CustomMenu />
      </div>
    </Sidebar>
  );
  
  // Layout personnalisé
  const CustomLayout = props => (
    <Layout
      {...props}
      sidebar={CustomSidebar}
      className="bg-gray-50"
    />
  );
  
  export { CustomLayout, CustomSearchInput };