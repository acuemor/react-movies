import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function SearchBar({ className, query, onType, showBackButton }) {
	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1); // Go back in history navigation
	}

	function getBackIcon() {
		return (
			<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M9.93972 1.25199C9.93943 1.58377 9.8074 1.90186 9.57264 2.13633L3.17204 8.53693C2.97831 8.73061 2.82463 8.96056 2.71977 9.21365C2.61492 9.46673 2.56096 9.73799 2.56096 10.0119C2.56096 10.2859 2.61492 10.5571 2.71977 10.8102C2.82463 11.0633 2.97831 11.2933 3.17204 11.4869L9.5643 17.8792C9.79226 18.1152 9.91839 18.4313 9.91554 18.7595C9.91269 19.0876 9.78108 19.4014 9.54905 19.6335C9.31703 19.8655 9.00316 19.9971 8.67504 20C8.34692 20.0028 8.03081 19.8767 7.79479 19.6487L1.40253 13.2615C0.543026 12.4003 0.0603027 11.2332 0.0603027 10.0165C0.0603027 8.7998 0.543026 7.63279 1.40253 6.77159L7.80313 0.366817C7.97815 0.191688 8.20118 0.0724106 8.44401 0.0240773C8.68683 -0.024256 8.93854 0.000527255 9.16728 0.0952911C9.39602 0.190055 9.5915 0.35054 9.729 0.55644C9.8665 0.762339 9.93984 1.0044 9.93972 1.25199Z" fill="white" />
			</svg>
		)
	}

	function getGlassIcon() {
		return (
			<svg
				className='glass'
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<g clipPath="url(#clip0_2_97)">
					<path d="M19.7558 18.5775L14.7817 13.6033C16.1372 11.9455 16.8037 9.83008 16.6432 7.69464C16.4828 5.55919 15.5077 3.56711 13.9197 2.13044C12.3316 0.69376 10.2522 -0.0775884 8.11137 -0.0240619C5.97058 0.0294646 3.93225 0.903771 2.41801 2.41801C0.903771 3.93225 0.0294646 5.97058 -0.0240619 8.11137C-0.0775884 10.2522 0.69376 12.3316 2.13044 13.9197C3.56711 15.5077 5.55919 16.4828 7.69464 16.6432C9.83008 16.8037 11.9455 16.1372 13.6033 14.7817L18.5775 19.7558C18.7347 19.9076 18.9452 19.9916 19.1637 19.9897C19.3822 19.9878 19.5912 19.9002 19.7457 19.7457C19.9002 19.5912 19.9878 19.3822 19.9897 19.1637C19.9916 18.9452 19.9076 18.7347 19.7558 18.5775ZM8.33333 15C7.01479 15 5.72586 14.609 4.62953 13.8765C3.53321 13.1439 2.67872 12.1027 2.17414 10.8846C1.66955 9.66638 1.53753 8.32594 1.79477 7.03273C2.052 5.73953 2.68694 4.55164 3.61929 3.61929C4.55164 2.68694 5.73953 2.052 7.03273 1.79477C8.32594 1.53753 9.66638 1.66955 10.8846 2.17414C12.1027 2.67872 13.1439 3.53321 13.8765 4.62953C14.609 5.72586 15 7.01479 15 8.33333C14.998 10.1008 14.295 11.7954 13.0452 13.0452C11.7954 14.295 10.1008 14.998 8.33333 15Z" />
				</g>
				<defs>
					<clipPath id="clip0_2_97">
						<rect width="20" height="20" fill="white" />
					</clipPath>
				</defs>
			</svg>
		)
	}

	return (
		<div className={`${className}`}>
			<div className='container'>
				{showBackButton && <div className="back-icon" onClick={handleGoBack}>{getBackIcon()}</div>}
				<div className='search-container'>
					{getGlassIcon()}
					<input
						className='searchbar'
						placeholder='podcast'
						value={query}
						onChange={onType}
					></input>
				</div>
			</div>
		</div >

	);
}

export default styled(SearchBar)`
		div.search-container {
			position: relative;
  			margin-bottom: 60px;
			flex: 90%;
		}

		.searchbar {
			padding: 0px 5px 0px 40px;
			width: calc(100% - 40px);
			height: 50px;
			border: 0;
			font-size: 16px;
		}

		.glass {
			position: absolute;
			top: 50%;
			left: 10px;
			transform: translateY(-50%);
			width: 20px; 
			height: 20px;
			fill: white;
		}

		.container {
			display: flex;
			flex-wrap: wrap;
		}

		.back-icon {
			flex: 10%;
			margin-top: 15px;
		}
	`;