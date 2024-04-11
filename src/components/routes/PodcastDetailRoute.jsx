import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar.jsx';
import ProductList from '../ProductsList.jsx';
import { mockedPodcasts } from '../../mocks.js';

export default function PodcastDetailRoute() {
	const [query, setQuery] = useState('');
	const location = useLocation();
	const productState = location.state ? location.state.product : null;

	const imgUrl = productState.artworkUrl600;

	return (
		<>
			<SearchBar query={query} onType={(e) => setQuery(e.target.value)} />
			<img src={imgUrl} alt='Podcast detail image' />
			<ProductList products={mockedPodcasts} filterText={query} />
		</>
	);
}