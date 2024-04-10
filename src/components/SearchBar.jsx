import { InputStyled } from '../styles/Input.js';

export default function SearchBar({ query, onType }) {

	return (
		<InputStyled
			placeholder='podcast'
			value={query}
			onChange={onType}
		></InputStyled>
	);
}