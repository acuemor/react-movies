import { useState } from 'react'
import SearchBar from '../SearchBar.jsx';
import ProductList from '../ProductsList.jsx';
import { mockedPodcasts } from '../../mocks.js';

export default function PodcastSearchRoute() {
	const [query, setQuery] = useState('');

	return (
		<>
			<SearchBar query={query} onType={(e) => setQuery(e.target.value)} />
			<ProductList products={mockedPodcasts} filterText={query} />
		</>
	);
}