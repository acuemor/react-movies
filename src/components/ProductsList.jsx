import { PODCAST_SEARCH_CATEGORY_ROWS } from '../mocks.js';
import { NoResultsStyled } from '../styles/NoResults.js';
import { ProductCategoryRowStyled } from '../styles/ProductCategoryRowStyled.js';

function formatDate(dateString) {
	const date = new Date(dateString);
	const now = new Date();

	// Difference in ms
	const diffInMilliseconds = now - date;
	const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
	const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

	if (date.getFullYear() !== now.getFullYear()) {
		// Different year
		return date.toLocaleDateString('en-GB');
	} else if (diffInDays < 7) {
		// Less than 1 week
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const dayOfWeek = days[date.getDay()];
		return `Last ${dayOfWeek}`;
	} else if (diffInHours < 24) {
		// Less than 24 hours
		return `${diffInHours} hours ago`;
	} else {
		// Current year
		return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
	}
}


function ProductCategoryRow({ categories }) {
	return (
		<thead>
			<ProductCategoryRowStyled>
				{categories.map(category => <th key={category.id}>{category.name}</th>)}
			</ProductCategoryRowStyled>
			<tr>
				<td colSpan={categories.length}><hr /></td>
			</tr>
		</thead>
	);
}

function ProductRow({ product }) {
	return (
		<>
			<tr>
				<td>{product.artistName}</td>
				<td>{product.collectionName}</td>
				<td>{formatDate(product.releaseDate)}</td>
			</tr>
			<tr>
				<td colSpan="3"><hr /></td>
			</tr>
		</>
	);
}

function NoResults() {
	return (
		<tr>
			<NoResultsStyled>No results found</NoResultsStyled>
		</tr>
	);
}

export default function ProductList({ products, filterText }) {
	const filteredProducts = products.reduce((accumulator, product) => {
		if (product.collectionName.toLowerCase().includes(filterText.toLowerCase())) {
			accumulator.push(
				<ProductRow
					product={product}
					key={product.trackId}
				/>
			);
		}
		return accumulator;
	}, []);

	return (
		<table style={{ borderSpacing: '10px' }}>
			{filteredProducts.length ?
				<ProductCategoryRow categories={PODCAST_SEARCH_CATEGORY_ROWS} /> :
				<tbody><NoResults /></tbody>
			}
			<tbody>{filteredProducts}</tbody>
		</table>
	);
}