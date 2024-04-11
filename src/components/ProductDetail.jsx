import styled from "styled-components";


export function ProductDetail({ className, product }) {
	const imgUrl = product.artworkUrl600;

	return (
		<div className={`${className}`}>
			<img src={imgUrl} alt='Podcast detail image' />
		</div>
	);
}

export default styled(ProductDetail)`
	img {
		width: auto;
    	height: 280px;
		margin-bottom: 60px;
	}
`