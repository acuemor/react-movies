import { useState } from 'react'
import SearchBar from '../components/SearchBar.jsx';
import ProductList from '../components/ProductsList.jsx';
import { mockedPodcasts } from '../mocks.js';

export default function PodcastSearchRoute() {
	const [query, setQuery] = useState('');

	return (
		<>
			<SearchBar query={query} onType={(e) => setQuery(e.target.value)} />
			<ProductList products={mockedPodcasts} filterText={query} />
		</>
	);
}