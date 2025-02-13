import React from 'react';
// import { StatusBadge } from './tatusBadge'; // Assurez-vous que le chemin est correct
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  EditButton,
  SelectInput,
  ReferenceInput,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  useRecordContext,
  SearchInput
} from 'react-admin';
import { Calendar, User } from 'lucide-react';

// Composant d'en-tête amélioré
const ListHeader = () => (
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg mb-6">
    <div className="px-6 py-8 sm:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-white">
          <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
          <p className="mt-2 text-blue-100">Gérez votre contenu avec style et efficacité</p>
        </div>
        <CreateButton
          className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg 
                     flex items-center gap-2 transition-all duration-200 ease-in-out
                     shadow-md hover:shadow-lg transform hover:-translate-y-1"
          label="Nouvel article"
        />
      </div>
    </div>
  </div>
);

// Composant de badge de statut
export const StatusBadge = () => {
  const record = useRecordContext();
  
  if (!record) return null;

  const getStatusStyle = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800'; // Vert pour Publié
      case 'draft':
        return 'bg-gray-100 text-gray-800'; // Gris pour Brouillon
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'published':
        return 'Publié';
      case 'draft':
        return 'Brouillon';
      default:
        return status;
    }
  };

  return (
    <span 
      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(record.status)}`}
    >
      {getStatusLabel(record.status)}
    </span>
  );
};

// Filtres améliorés avec barre de recherche
const PostFilters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput source="userId" reference="users" label="Auteur">
    <SelectInput optionText="name" />
  </ReferenceInput>,
  <SelectInput
    source="status"
    choices={[
      { id: 'published', name: 'Publié' },
      { id: 'draft', name: 'Brouillon' },
    ]}
  />,
];

// Actions de liste
const ListActions = () => (
  <TopToolbar className="flex gap-2">
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

// Composant principal de liste
export const PostList = () => (
  <>
    <ListHeader />
    <List
      filters={PostFilters}
      actions={<ListActions />}
      sort={{ field: 'publishedAt', order: 'DESC' }}
      perPage={10}
    >
      <Datagrid
        bulkActionButtons={false}
        hover
        className="shadow-sm rounded-lg overflow-hidden"
      >
        <TextField 
          source="title" 
          label="Titre" 
          className="font-medium"
        />
        <ReferenceField 
          label="Auteur" 
          source="userId" 
          reference="users"
        >
          <div className="flex items-center gap-2">
            <User size={16} className="text-gray-400" />
            <TextField source="name" />
          </div>
        </ReferenceField>
        <DateField
          source="publishedAt"
          label="Publication"
          locales="fr-FR"
          showTime
          render={record => (
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span>{new Date(record.publishedAt).toLocaleDateString('fr-FR')}</span>
            </div>
          )}
        />
        <TextField
          source="status"
          label="Statut"
          render={record => <StatusBadge />}
        />
        <EditButton className="text-blue-600 hover:text-blue-800" />
      </Datagrid>
    </List>
  </>
);

export default PostList;