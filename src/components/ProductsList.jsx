import { PODCAST_SEARCH_CATEGORY_ROWS } from '../mocks.js';

function ProductCategoryRow({ categories }) {
	return (
		<thead>
			<tr>
				{categories.map(category => <th key={category.id}>{category.name}</th>)}
			</tr>
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
				<td>{new Date(product.releaseDate).toLocaleDateString('en-GB')}</td>
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
			<td colSpan="3">No results found</td>
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
		<table>
			{filteredProducts.length ?
				<ProductCategoryRow categories={PODCAST_SEARCH_CATEGORY_ROWS} /> :
				<tbody><NoResults /></tbody>
			}
			<tbody>{filteredProducts}</tbody>
		</table>
	);
}