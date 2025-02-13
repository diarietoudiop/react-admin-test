import { Show, SimpleShowLayout, TextField, ReferenceField, DateField } from 'react-admin';
import { Calendar, User } from 'lucide-react';
import StatusField from '../StatusField';
import { StatusBadge } from './StatusBadge';

export const PostShow = () => (
  <div className="flex flex-col">
    <div className="bg-white shadow-sm mb-6">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Détails de l'article
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Visualisez toutes les informations de l'article
        </p>
      </div>
    </div>
    <Show>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <SimpleShowLayout className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Titre</h3>
            <TextField source="title" className="text-lg font-medium text-gray-900" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Contenu</h3>
            <TextField source="body" className="text-gray-600" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Auteur</h3>
            <ReferenceField source="userId" reference="users">
              <div className="flex items-center gap-2">
                <User size={16} className="text-gray-400" />
                <TextField source="name" className="text-gray-600" />
              </div>
            </ReferenceField>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Statut</h3>
            <StatusField 
              source="status"
              render={record => <StatusBadge status={record.status} />}
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Date de publication</h3>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <DateField 
                source="publishedAt" 
                locales="fr-FR" 
                showTime 
                className="text-gray-600"
              />
            </div>
          </div>
        </SimpleShowLayout>
      </div>
    </Show>
  </div>
);