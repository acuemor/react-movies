export default function ProductList({ items }) {
	return (
		<table>
			<tbody>
				{items.map(podcast => (
					<tr key={podcast.id}>
						<td>{podcast.name}</td>
						<td>{podcast.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}