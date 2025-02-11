import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  Show,
  SimpleShowLayout,
  SelectInput,
  required,
  EditButton
} from 'react-admin';

// Composant pour afficher le statut actif/inactif
const StatusField = ({ record }) => {
  if (!record) return null;
  return (
    <span style={{
      color: record.isActive ? 'green' : 'red',
      fontWeight: 'bold'
    }}>
      {record.isActive ? 'Actif' : 'Inactif'}
    </span>
  );
};

// Filtres pour la liste des utilisateurs
const userFilters = [
  <TextInput source="q" label="Rechercher" alwaysOn />,
  <SelectInput
    source="isActive"
    choices={[
      { id: true, name: 'Actif' },
      { id: false, name: 'Inactif' },
    ]}
    label="Statut"
  />
];

// Liste des utilisateurs
export const UserList = () => (
  <List
    filters={userFilters}
    sort={{ field: 'name', order: 'ASC' }}
    perPage={10}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" label="Nom" />
      <EmailField source="email" />
      <StatusField source="isActive" label="Statut" />
      <EditButton />
    </Datagrid>
  </List>
);

// Édition d'utilisateur
export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nom" validate={[required()]} fullWidth />
      <TextInput source="email" label="Email" validate={[required()]} fullWidth />
      <TextInput source="password" label="Mot de passe" fullWidth />
      <SelectInput
        source="isActive"
        choices={[
          { id: true, name: 'Actif' },
          { id: false, name: 'Inactif' },
        ]}
        label="Statut"
      />
    </SimpleForm>
  </Edit>
);

// Création d'utilisateur
export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nom" validate={[required()]} fullWidth />
      <TextInput source="email" label="Email" validate={[required()]} fullWidth />
      <TextInput source="password" label="Mot de passe" validate={[required()]} fullWidth />
      <SelectInput
        source="isActive"
        choices={[
          { id: true, name: 'Actif' },
          { id: false, name: 'Inactif' },
        ]}
        label="Statut"
        defaultValue={true}
      />
    </SimpleForm>
  </Create>
);

// Affichage d'utilisateur
export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" label="Nom" />
      <EmailField source="email" />
      <StatusField source="isActive" label="Statut" />
    </SimpleShowLayout>
  </Show>
);

export default UserList;