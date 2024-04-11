import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar.jsx';
import ProductList from '../components/ProductsList.jsx';
import { mockedPodcasts } from '../mocks.js';
import ProductDetail from '../components/ProductDetail.jsx';

export default function PodcastDetailRoute() {
	const [query, setQuery] = useState('');
	const location = useLocation();
	const productState = location.state ? location.state.product : null;

	return (
		<>
			<SearchBar query={query} onType={(e) => setQuery(e.target.value)} showBackButton={true} />
			<ProductDetail product={productState} />
			<ProductList products={mockedPodcasts} filterText={query} />
		</>
	);
}