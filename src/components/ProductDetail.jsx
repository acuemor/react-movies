import styled from "styled-components";


export function ProductDetail({ className, product }) {
	const imgUrl = product.artworkUrl600;

	function getDownArrow() {
		return (
			<svg className="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.0325 6.1575C13.9628 6.08721 13.8798 6.03141 13.7884 5.99333C13.697 5.95526 13.599 5.93565 13.5 5.93565C13.401 5.93565 13.3029 5.95526 13.2116 5.99333C13.1202 6.03141 13.0372 6.08721 12.9675 6.1575L9.53248 9.5925C9.46276 9.6628 9.37981 9.71859 9.28842 9.75667C9.19702 9.79475 9.09899 9.81435 8.99998 9.81435C8.90098 9.81435 8.80295 9.79475 8.71155 9.75667C8.62016 9.71859 8.53721 9.6628 8.46748 9.5925L5.03248 6.1575C4.96276 6.08721 4.87981 6.03141 4.78842 5.99333C4.69702 5.95526 4.59899 5.93565 4.49998 5.93565C4.40098 5.93565 4.30295 5.95526 4.21155 5.99333C4.12016 6.03141 4.03721 6.08721 3.96748 6.1575C3.8278 6.29802 3.74939 6.48811 3.74939 6.68625C3.74939 6.88439 3.8278 7.07448 3.96748 7.215L7.40998 10.6575C7.83186 11.0789 8.40373 11.3155 8.99998 11.3155C9.59624 11.3155 10.1681 11.0789 10.59 10.6575L14.0325 7.215C14.1722 7.07448 14.2506 6.88439 14.2506 6.68625C14.2506 6.48811 14.1722 6.29802 14.0325 6.1575Z" fill="white" />
			</svg>

		)
	}

	function getUpArrow() {
		return (
			<svg className="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.0325 11.8425C14.1022 11.9128 14.1852 11.9686 14.2766 12.0067C14.368 12.0447 14.466 12.0643 14.565 12.0643C14.664 12.0643 14.7621 12.0447 14.8534 12.0067C14.9448 11.9686 15.0278 11.9128 15.0975 11.8425L18.5325 8.4075C18.6022 8.33721 18.6852 8.28141 18.7766 8.24333C18.868 8.20526 18.966 8.18565 19.065 8.18565C19.164 8.18565 19.2621 8.20526 19.3534 8.24333C19.4448 8.28141 19.5278 8.33721 19.5975 8.4075L22.9325 11.8425C23.1929 12.103 23.313 12.4874 23.2407 12.8454C23.1684 13.2033 22.9194 13.4989 22.5806 13.6141C22.2419 13.7292 21.8676 13.6424 21.6396 13.4004L18.0006 10.1035L14.3616 13.4004C14.1337 13.6424 13.7594 13.7292 13.4207 13.6141C13.082 13.4989 12.833 13.2033 12.7607 12.8454C12.6884 12.4874 12.8085 12.103 13.0689 11.8425L16.4039 8.4075C16.4736 8.33721 16.5566 8.28141 16.648 8.24333C16.7394 8.20526 16.8374 8.18565 16.9364 8.18565C17.0354 8.18565 17.1334 8.20526 17.2248 8.24333C17.3162 8.28141 17.3992 8.33721 17.4689 8.4075L20.9039 11.8425C20.9736 11.9128 21.0566 11.9686 21.148 12.0067C21.2394 12.0447 21.3374 12.0643 21.4364 12.0643C21.5354 12.0643 21.6334 12.0447 21.7248 12.0067C21.8162 11.9686 21.8992 11.9128 21.9689 11.8425L23.4364 10.375C23.6969 10.1145 23.8169 9.73012 23.7446 9.37209C23.6723 9.01406 23.4233 8.71847 23.0846 8.60329C22.7459 8.48812 22.3716 8.57489 22.1436 8.81691L18.5046 11.8654L14.8656 8.81691C14.6377 8.57489 14.2634 8.48812 13.9246 8.60329C13.5859 8.71847 13.3369 9.01406 13.2646 9.37209C13.1923 9.73012 13.3123 10.1145 13.5729 10.375L14.0325 10.8345C13.9628 10.9048 13.8798 10.9606 13.7884 10.9987C13.697 11.0367 13.599 11.0563 13.5 11.0563C13.401 11.0563 13.3029 11.0367 13.2116 10.9987C13.1202 10.9606 13.0372 10.9048 12.9675 10.8345L9.53248 7.39951C9.46276 7.32922 9.37981 7.27341 9.28842 7.23533C9.19702 7.19726 9.09899 7.17765 8.99998 7.17765C8.90098 7.17765 8.80295 7.19726 8.71155 7.23533C8.62016 7.27341 8.53721 7.32922 8.46748 7.39951L5.03248 10.8345C4.96276 10.9048 4.87981 10.9606 4.78842 10.9987C4.69702 11.0367 4.59899 11.0563 4.49998 11.0563C4.40098 11.0563 4.30295 11.0367 4.21155 10.9987C4.12016 10.9606 4.03721 10.9048 3.96748 10.8345C3.8278 10.694 3.74939 10.5039 3.74939 10.3057C3.74939 10.1076 3.8278 9.91753 3.96748 9.77701L7.40998 6.33451C7.83186 5.9131 8.40373 5.67655 8.99998 5.67655C9.59624 5.67655 10.1681 5.9131 10.59 6.33451L14.0325 9.77701C14.1722 9.91753 14.2506 10.1076 14.2506 10.3057C14.2506 10.5039 14.1722 10.694 14.0325 10.8345Z" fill="white" />
			</svg>

		)
	}

	function handleOrderClick(releaseDate) {
		// TODO implement a sort method that sorts the data asc or desc by releaseDate
	}

	return (
		<>
			<div className={`${className}`}>
				<img src={imgUrl} alt='Podcast detail image' />
				<div className="detail">
					<div>Audio Icon</div>
					<div className="artist-name">
						<h1>{product.artistName}</h1>
					</div>
					<div className="order" onClick={() => handleOrderClick(product.releaseDate)}><p>Order by</p>{getDownArrow()}</div>
				</div>
			</div>

		</>
	);
}

export default styled(ProductDetail)`
	img {
		width: auto;
    	height: 280px;
	}

	.detail {
		display: flex;
		justify-content: space-between;
	}

	.order {
		display: flex;
	}

	.arrow {
		margin-top: 20px;
	}
`