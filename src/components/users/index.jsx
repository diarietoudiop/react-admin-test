import {
    List,
    Datagrid,
    TextField,
    EmailField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    Show,
    SimpleShowLayout,
    EditButton,
    ShowButton,
  } from 'react-admin';
  
  export const UserList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
  
  export const UserEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
  
  export const UserCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
  
  export const UserShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </SimpleShowLayout>
    </Show>
  );