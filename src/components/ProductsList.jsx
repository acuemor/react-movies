export default function ProductList({ items }) {
	return (
		<table>
			<tbody>
				{items.map(podcast => (
					<tr key={podcast.trackId}>
						<td>{podcast.artistName}</td>
						<td>{podcast.collectionName}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}