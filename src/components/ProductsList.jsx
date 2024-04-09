import { PODCAST_SEARCH_CATEGORY_ROWS } from '../mocks.js';

function ProductCategoryRow({ categories }) {
	return (
		<thead>
			<tr>
				{categories.map(category => <th key={category.id}>{category.name}</th>)}
			</tr>
		</thead>
	);
}

function ProductRow({ product }) {
	return (
		<tr>
			<td>{product.artistName}</td>
			<td>{product.collectionName}</td>
			<td>{product.releaseDate}</td>
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
			<ProductCategoryRow categories={PODCAST_SEARCH_CATEGORY_ROWS} />
			<tbody>{filteredProducts}</tbody>
		</table>
	);
}