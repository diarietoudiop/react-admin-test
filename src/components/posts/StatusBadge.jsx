// components/posts/StatusBadge.jsx
import { useRecordContext } from 'react-admin';

export const StatusBadge = () => {
  const record = useRecordContext();
  if (!record) return null;

  const getStatusStyle = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'draft':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusStyle(record.status)}`}>
      {getStatusLabel(record.status)}
    </span>
  );
};