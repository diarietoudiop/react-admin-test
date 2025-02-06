// src/components/posts/index.js
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    Create,
    Show,
    SimpleShowLayout
} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
            <ReferenceInput source="userId" reference="users" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput multiline source="body" />
            <ReferenceInput source="userId" reference="users" />
        </SimpleForm>
    </Create>
);

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);