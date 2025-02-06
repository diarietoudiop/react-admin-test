// src/App.js
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate, UserShow } from './components/users';
import { PostList, PostEdit, PostCreate, PostShow } from './components/posts';
import Dashboard from './components/dashboard/index';
import authProvider from './providers/authProvider';

const dataProvider = jsonServerProvider('http://localhost:3004');

const App = () => (
  <Admin 
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource 
      name="users" 
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      show={UserShow}
    />
    <Resource 
      name="posts" 
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
  </Admin>
);

export default App;