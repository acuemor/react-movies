export function filterItemsByName(items, query) {
	query = query.toLowerCase();
	return items.filter(item =>
		item.collectionName.split(' ').some(word =>
			word.toLowerCase().startsWith(query)
		)
	);
}