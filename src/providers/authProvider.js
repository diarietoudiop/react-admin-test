// src/providers/authProvider.js
const authProvider = {
    login: ({ username, password }) => {
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('auth', username);
        return Promise.resolve();
      }
      return Promise.reject();
    },
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
    checkAuth: () => 
      localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem('auth');
        return Promise.reject();
      }
      return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
  };
  
  export default authProvider;