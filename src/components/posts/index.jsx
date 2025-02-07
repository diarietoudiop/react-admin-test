import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    Create,
    Show,
    SimpleShowLayout,
    EditButton,
    ShowButton,
  } from 'react-admin';
  
  export const PostList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
  
  export const PostEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <ReferenceInput source="userId" reference="users">
          <TextInput source="name" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
  
  export const PostCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <ReferenceInput source="userId" reference="users">
          <TextInput source="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
  
  export const PostShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );