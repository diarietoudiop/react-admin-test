import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  EditButton,
  SelectInput,
  ReferenceInput,
  TextInput,
  Edit,
  Create,
  SimpleForm,
  Show,
  SimpleShowLayout,
  DateInput,
  required
} from 'react-admin';
import StatusField from '../StatusField';

// Post filters
const postFilters = [
  <TextInput source="q" label="Rechercher" alwaysOn />,
  <ReferenceInput source="userId" reference="users" label="Auteur">
      <SelectInput optionText="name" />
  </ReferenceInput>,
  <SelectInput
      source="status"
      choices={[
          { id: 'published', name: 'Publié' },
          { id: 'draft', name: 'Brouillon' },
      ]}
      label="Statut"
  />,
  <DateInput source="publishedAt" label="Date de publication" />
];

// List component
export const PostList = () => (
  <List 
      filters={postFilters}
      sort={{ field: 'publishedAt', order: 'DESC' }}
      perPage={10}
  >
      <Datagrid rowClick="show">
          <TextField source="title" label="Titre" />
          <ReferenceField source="userId" reference="users" link="show" label="Auteur">
              <TextField source="name" />
          </ReferenceField>
          <DateField source="publishedAt" label="Date de publication" locales="fr-FR" showTime />
          <StatusField source="status" label="Statut" />
          <EditButton />
      </Datagrid>
  </List>
);

// Edit component
export const PostEdit = () => (
  <Edit>
      <SimpleForm>
          <TextInput source="title" label="Titre" validate={[required()]} fullWidth />
          <TextInput multiline source="body" label="Contenu" validate={[required()]} fullWidth rows={5} />
          <ReferenceInput source="userId" reference="users" label="Auteur">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <SelectInput
              source="status"
              choices={[
                  { id: 'published', name: 'Publié' },
                  { id: 'draft', name: 'Brouillon' },
              ]}
              label="Statut"
          />
          <DateInput source="publishedAt" label="Date de publication" />
      </SimpleForm>
  </Edit>
);

// Create component
export const PostCreate = () => (
  <Create>
      <SimpleForm>
          <TextInput source="title" label="Titre" validate={[required()]} fullWidth />
          <TextInput multiline source="body" label="Contenu" validate={[required()]} fullWidth rows={5} />
          <ReferenceInput source="userId" reference="users" label="Auteur">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <SelectInput
              source="status"
              choices={[
                  { id: 'published', name: 'Publié' },
                  { id: 'draft', name: 'Brouillon' },
              ]}
              label="Statut"
              defaultValue="draft"
          />
      </SimpleForm>
  </Create>
);

// Show component
export const PostShow = () => (
  <Show>
      <SimpleShowLayout>
          <TextField source="title" label="Titre" />
          <TextField source="body" label="Contenu" />
          <ReferenceField source="userId" reference="users" label="Auteur">
              <TextField source="name" />
          </ReferenceField>
          <StatusField source="status" label="Statut" />
          <DateField source="publishedAt" label="Date de publication" locales="fr-FR" showTime />
      </SimpleShowLayout>
  </Show>
);