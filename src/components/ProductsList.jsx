import styled from "styled-components";

import { PODCAST_SEARCH_CATEGORY_ROWS } from '../mocks.js';

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


function ProductCategoryRow({ className, categories }) {
	return (
		<thead className={`${className}`}>
			<tr className="category">
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
				<td>{formatDate(product.releaseDate)}</td>
			</tr>
			<tr>
				<td colSpan="3"><hr /></td>
			</tr>
		</>
	);
}

function NoResults({ className }) {
	return (
		<tr className={`${className}`}>
			<td>No results found</td>
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
				<ProductCategoryRowStyled categories={PODCAST_SEARCH_CATEGORY_ROWS} /> :
				<tbody><NoResultsStyled /></tbody>
			}
			<tbody>{filteredProducts}</tbody>
		</table>
	);
}

export const ProductCategoryRowStyled = styled(ProductCategoryRow)`
	.category {
		opacity: 0.3;
	}
`
export const NoResultsStyled = styled(NoResults)`
	td {
		font-size: 24px;
		opacity: 0.3;
		padding: 0 20px;
	}
`