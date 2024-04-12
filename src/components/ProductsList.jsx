import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils.js";
import { PODCAST_SEARCH_CATEGORY_ROWS } from '../mocks.js';

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
	const navigate = useNavigate();

	function handleClick(product) {
		navigate(`/detail/${product.trackId}`, { state: { product } }); //TODO send product as param to product detail
	}

	return (
		<>
			<tr onClick={() => handleClick(product)}>
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

export default function ProductList({ products }) {

	return (
		<table style={{ borderSpacing: '10px' }}>
			{products.length ?
				<ProductCategoryRowStyled categories={PODCAST_SEARCH_CATEGORY_ROWS} /> :
				<tbody><NoResultsStyled /></tbody>
			}
			<tbody>{products.map(product =>
				<ProductRow
					product={product}
					key={product.trackId}
				/>)}
			</tbody>
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