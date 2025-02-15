import { Admin, Resource, Layout, AppBar, UserMenu,useLogout } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { UserList, UserEdit, UserCreate, UserShow } from './components/users';
import { PostList, PostEdit, PostCreate, PostShow } from './components/posts';
import Dashboard from './components/dashboard/index';
import authProvider from './providers/authProvider';
import LogoutIcon from '@mui/icons-material/Logout';

// import { CustomLayout } from './components/customlayout';
// import LogoutButton from './components/common/LogoutButton/index';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' }, 
    secondary: { main: '#dc004e' },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: { fontSize: '2rem' },
    body1: { fontSize: '1rem' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' }, 
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#b0bec5' },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: { fontSize: '2rem' },
    body1: { fontSize: '1rem' },
  },
});

const ThemeToggler = ({ themeMode, setThemeMode }) => (
  <IconButton
    sx={{ ml: 1, color: 'white' }}
    onClick={() => {
      const newTheme = themeMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      setThemeMode(newTheme);
    }}
  >
    {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
  </IconButton>
);



const CustomAppBar = ({ themeMode, setThemeMode, ...props }) => {
  const logout = useLogout();
  
  return (
    <AppBar {...props}>
      <Box flex="1">
        <Typography variant="h6" id="react-admin-title"></Typography>
      </Box>
      <IconButton 
        color="inherit" 
        onClick={() => logout()}
        sx={{ marginLeft: 1 }}
      >
        <LogoutIcon />
      </IconButton>
    </AppBar>
  );
};

const CustomLayout = ({ themeMode, setThemeMode, ...props }) => (
  <Layout {...props} appBar={(appBarProps) => <CustomAppBar {...appBarProps} themeMode={themeMode} setThemeMode={setThemeMode} />} />
);

const App = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <Admin
       
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={jsonServerProvider('http://localhost:3004')}
        layout={(props) => <CustomLayout {...props} themeMode={themeMode} setThemeMode={setThemeMode} />}
        // theme={themeMode === 'dark' ? darkTheme : lightTheme}
        disableDarkMode 
      >
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} />
      </Admin>
    </ThemeProvider>
  );
};

export default App;
 