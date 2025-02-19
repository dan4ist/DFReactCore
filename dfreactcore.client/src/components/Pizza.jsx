import { useState, useEffect } from 'react';
import { PizzaList } from './PizzaList';

const term = "Pizza";
const api_url = "/pizza";
const headers = {
	'Content-Type': 'application/json',
};

export function Pizza() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchPizzaData();
	}, []);

	const fetchPizzaData = () => {
		fetch(api_url)
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => setError(error));
	}

	const handleCreate = (item) => {
		console.log(`add item: ${JSON.stringify(item)}`)

		fetch(api_url, {
			method: 'POST',
			headers,
			body: JSON.stringify({ name: item.name, description: item.description }),
		})
			.then(response => response.json())
			.then(returnedItem => setData([...data, returnedItem]))
			.catch(error => setError(error));
	};

	const handleUpdate = (updatedItem) => {

		console.log(`update item: ${JSON.stringify(updatedItem)}`)

		fetch(`${api_url}/${updatedItem.id}`, {
			method: 'PUT',
			headers,
			body: JSON.stringify(updatedItem),
		})
			.then(() => setData(data.map(item => item.id === updatedItem.id ? updatedItem : item)))
			.catch(error => setError(error));
	};

	const handleDelete = (id) => {
		fetch(`${api_url}/${id}`, {
			method: 'DELETE',
			headers,
		})
			.then(() => setData(data.filter(item => item.id !== id)))
			.catch(error => console.error('Error deleting item:', error));
	};


	return (
		<div>
			<PizzaList
				name={term}
				data={data}
				error={error}
				onCreate={handleCreate}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
			/>
		</div>
	);
}

export default Pizza;