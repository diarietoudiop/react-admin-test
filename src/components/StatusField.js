// src/components/StatusField.js
import { Chip } from '@mui/material';

const StatusField = ({ record }) => {
    if (!record) return null;
    
    const statusColors = {
        published: 'success',
        draft: 'default'
    };
    
    return (
        <Chip 
            label={record.status === 'published' ? 'Publié' : 'Brouillon'}
            color={statusColors[record.status] || 'default'}
            size="small"
        />
    );
};

export default StatusField;