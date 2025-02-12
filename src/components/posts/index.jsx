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
    useNotify,
    useRedirect,
    required,
    TopToolbar,
    CreateButton,
    ExportButton,
    FilterButton,
  } from 'react-admin';
  import { Calendar, User, Tag } from 'lucide-react';
  import StatusField from '../StatusField';
  
  const StatusBadge = ({ status }) => {
    const getStatusStyle = (status) => {
      switch (status) {
        case 'published':
          return 'bg-green-100 text-green-800 border border-green-200';
        case 'draft':
          return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        default:
          return 'bg-gray-100 text-gray-800 border border-gray-200';
      }
    };
  
    return (
      <span className={`${getStatusStyle(status)} px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit`}>
        <Tag size={14} />
        {status === 'published' ? 'Publié' : 'Brouillon'}
      </span>
    );
  };
  
  const PageHeader = () => (
    <div className="bg-white shadow-sm mb-6">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Articles
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              {/* Gérez tous vos articles depuis cette interface */}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CreateButton 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              label="Nouvel article"
            />
          </div>
        </div>
      </div>
    </div>
  );
  
  const ListActions = () => (
    <TopToolbar className="flex gap-2">
      <ExportButton 
        className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2"
      />
      <FilterButton 
        className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2"
      />
    </TopToolbar>
  );
  
  const PostFilters = [
    <TextInput 
      source="q" 
      label="Rechercher" 
      alwaysOn 
      className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
    />,
    <ReferenceInput 
      source="userId" 
      reference="users" 
      label="Auteur"
      className="min-w-[200px]"
    >
      <SelectInput 
        optionText="name"
        className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-2" 
      />
    </ReferenceInput>,
    <SelectInput
      source="status"
      choices={[
        { id: 'published', name: 'Publié' },
        { id: 'draft', name: 'Brouillon' },
      ]}
      label="Statut"
      className="min-w-[150px]"
    />
  ];
  
  export const PostList = () => (
    <div className="flex flex-col">
      <PageHeader />
      <List
        filters={PostFilters}
        actions={<ListActions />}
        sort={{ field: 'publishedAt', order: 'DESC' }}
        perPage={10}
        className="bg-white shadow-lg rounded-xl overflow-hidden"
      >
        <Datagrid
          rowClick="show"
          className="min-w-full divide-y divide-gray-200"
          bulkActionButtons={false}
          sx={{
            '& .RaDatagrid-headerCell': {
              backgroundColor: '#f8fafc',
              fontWeight: 600,
              color: '#475569',
            },
            '& .RaDatagrid-row': {
              '&:hover': {
                backgroundColor: '#f1f5f9',
              },
            },
          }}
        >
          <TextField 
            source="title" 
            label="Titre"
            className="text-sm font-medium text-gray-900"
          />
          <ReferenceField 
            source="userId" 
            reference="users" 
            link="show" 
            label="Auteur"
          >
            <div className="flex items-center gap-2">
              <User size={16} className="text-gray-400" />
              <TextField source="name" className="text-sm text-gray-600" />
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
                <span className="text-sm text-gray-600">
                  {new Date(record.publishedAt).toLocaleDateString('fr-FR')}
                </span>
              </div>
            )}
          />
          <StatusField 
            source="status" 
            label="Statut"
            render={record => <StatusBadge status={record.status} />}
          />
          <EditButton
            label=""
            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
          />
        </Datagrid>
      </List>
    </div>
  );
  
  const PostForm = ({ children }) => (
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
  
  export const PostEdit = () => {
    const notify = useNotify();
    const redirect = useRedirect();
  
    const onSuccess = () => {
      notify('Publication mise à jour avec succès', { type: 'success' });
      redirect('list', 'posts');
    };
  
    const onError = () => {
      notify('Erreur lors de la mise à jour de la publication', { type: 'error' });
    };
  
    return (
      <div className="flex flex-col">
        <div className="bg-white shadow-sm mb-6">
          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Modifier l'article
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Modifiez les informations de votre article
            </p>
          </div>
        </div>
        <Edit mutationOptions={{ onSuccess, onError }}>
          <PostForm />
        </Edit>
      </div>
    );
  };
  
  export const PostCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();
  
    const onSuccess = () => {
      notify('Publication créée avec succès', { type: 'success' });
      redirect('list', 'posts');
    };
  
    const onError = () => {
      notify('Erreur lors de la création de la publication', { type: 'error' });
    };
  
    return (
      <div className="flex flex-col">
        <div className="bg-white shadow-sm mb-6">
          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Créer un nouvel article
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Remplissez les informations ci-dessous pour créer un nouvel article
            </p>
          </div>
        </div>
        <Create mutationOptions={{ onSuccess, onError }}>
          <PostForm>
            <input type="hidden" source="status" defaultValue="draft" />
          </PostForm>
        </Create>
      </div>
    );
  };
  
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