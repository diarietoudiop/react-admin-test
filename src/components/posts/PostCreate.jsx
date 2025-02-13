import { Create, useNotify, useRedirect } from 'react-admin';
import { PostForm } from './PostForm';

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