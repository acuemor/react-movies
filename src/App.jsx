import { useState } from 'react'
import './App.css'
import { mockedItems } from './mocks.js';


export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export function SearchBar({ query, onType }) {

  return (
    <input
      placeholder='podcast'
      value={query}
      onChange={onType}
    />
  );
}

export function ProductList({ items }) {
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

function FilterableList() {
  const [query, setQuery] = useState('');

  const filteredItems = filterItems(mockedItems, query)


  return (
    <>
      <SearchBar query={query} onType={(e) => setQuery(e.target.value)} />

      <ProductList items={filteredItems} />
    </>
  );
}

export default FilterableList
