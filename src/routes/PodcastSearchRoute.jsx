import { useState } from 'react'
import SearchBar from '../components/SearchBar.jsx';
import ProductList from '../components/ProductsList.jsx';
// import { mockedPodcasts } from '../mocks.js';

export default function PodcastSearchRoute() {
	const [query, setQuery] = useState('');
	const [podcasts, setPodcasts] = useState([]);
	const [loading, setLoading] = useState(false);

	function onRequestPodcasts() {
		setLoading(true);

		const encodeQuery = encodeURI(query);
		fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${encodeQuery}&limit=25`).then((response) => {
			return response.json();
		}).then(data => {
			setPodcasts(data.results);
			setLoading(false);
		}).catch((error) => {
			console.log(error);
			setLoading(false);
		});
	}

	return (
		<>
			<SearchBar query={query} onType={(e) => setQuery(e.target.value)} onRequestPodcasts={onRequestPodcasts} />
			{!loading && <ProductList products={podcasts} />}
		</>
	);
}