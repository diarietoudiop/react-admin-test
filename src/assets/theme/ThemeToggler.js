// import React from 'react';
// import { useStore } from 'react-admin';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// export const ThemeToggler = () => {
//   const [themeMode, setThemeMode] = useStore(
//     'theme.mode',
//     localStorage.getItem('theme') || 'light'
//   );

//   const toggleTheme = () => {
//     const newMode = themeMode === 'light' ? 'dark' : 'light';
//     setThemeMode(newMode);
//     localStorage.setItem('theme', newMode);
//   };

//   return (
//     <IconButton 
//       onClick={toggleTheme} 
//       color="inherit" 
//       title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
//       sx={{ ml: 1 }}
//     >
//       {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
//     </IconButton>
//   );
// };

// export default ThemeToggler;