import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar.jsx';
import ProductList from '../ProductsList.jsx';
import { mockedPodcasts } from '../../mocks.js';
import ProductDetail from '../ProductDetail.jsx';

export default function PodcastDetailRoute() {
	const [query, setQuery] = useState('');
	const location = useLocation();
	const productState = location.state ? location.state.product : null;

	return (
		<>
			<SearchBar query={query} onType={(e) => setQuery(e.target.value)} />
			<ProductDetail product={productState} />
			<ProductList products={mockedPodcasts} filterText={query} />
		</>
	);
}