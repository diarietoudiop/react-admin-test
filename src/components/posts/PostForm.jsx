import { SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, required } from 'react-admin';

export const PostForm = ({ children }) => (
  <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
    <SimpleForm
      className="space-y-6"
    >
      <TextInput 
        source="title" 
        label="Titre" 
        validate={[required()]} 
        fullWidth 
        className="rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <TextInput 
        multiline 
        source="body" 
        label="Contenu" 
        validate={[required()]} 
        fullWidth 
        rows={5}
        className="rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReferenceInput 
          source="userId" 
          reference="users" 
          label="Auteur"
        >
          <SelectInput 
            optionText="name"
            className="rounded-lg focus:ring-2 focus:ring-blue-500" 
          />
        </ReferenceInput>
        <SelectInput
          source="status"
          choices={[
            { id: 'published', name: 'Publié' },
            { id: 'draft', name: 'Brouillon' },
          ]}
          label="Statut"
          className="rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <DateInput 
        source="publishedAt" 
        label="Date de publication"
        className="rounded-lg focus:ring-2 focus:ring-blue-500" 
      />
      {children}
    </SimpleForm>
  </div>
);