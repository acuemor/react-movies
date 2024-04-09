export default function SearchBar({ query, onType }) {

	return (
		<input
			placeholder='podcast'
			value={query}
			onChange={onType}
		/>
	);
}