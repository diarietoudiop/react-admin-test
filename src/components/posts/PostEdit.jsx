export const PostEdit = () => {
    const notify = useNotify();
    
    const onSuccess = () => {
        notify('Publication mise à jour avec succès', { 
            type: 'success',
            messageArgs: { smart_count: 1 }
        });
    };

    const onError = (error) => {
        notify('Erreur lors de la mise à jour', { 
            type: 'error',
            messageArgs: { smart_count: 1 }
        });
    };

    return (
        <Edit mutationOptions={{ onSuccess, onError }}>
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
};