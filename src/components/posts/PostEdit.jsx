import { Edit, useNotify, useRedirect } from 'react-admin';
import { PostForm } from './PostForm';

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