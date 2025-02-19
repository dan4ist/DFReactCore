import { useState } from 'react';
import { TextField, Button, Box, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export function PizzaList({ name, data, onCreate, onUpdate, onDelete, error }) {
    const [formData, setFormData] = useState({ id: '', name: '', description: '' });
    const [editingId, setEditingId] = useState(null);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editingId) {
            onUpdate(formData);
            setEditingId(null);
        } else {
            onCreate(formData);
        }
        setFormData({ id: '', name: '', description: '' });
    };

    const handleEdit = (item) => {
        setEditingId(item.id);
        setFormData({
            id: item.id,
            name: item.name,
            description: item.description,
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({ id: '', name: '', description: '' });
    };


    return (
        <Box className='Box' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{name}</h2>
            <p>This component demonstrates API CRUD operations for a Pizza menu. Data is transferred between the .NET back-end API and the applicaiton front-end</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TextField label="Name" name="name" value={formData.name} onChange={handleFormChange} />
                <TextField label="Description" name="description" value={formData.description} onChange={handleFormChange} />
                <Button sx={{ mr: 1 }} variant="contained" type="submit">{editingId === null ? 'Create' : 'Update'}</Button>
                {editingId !== null && <Button variant="contained" color="secondary" onClick={handleCancelEdit}>Cancel</Button>}
            </form>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                {data.map(item => (
                    <ListItem key={item.id} secondaryAction={
                        <ListItemSecondaryAction>
                            <IconButton edge='end' onClick={() => handleEdit(item.id)}>
                                <Edit />
                            </IconButton>
                            <IconButton edge='end' onClick={() => onDelete(item.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    }>
                        <ListItemText primary={item.name} secondary={item.description} />
                    </ListItem>
                ))}
            </List>
            {error && <p>{error}</p>}
        </Box>
    );
}
export default PizzaList;