import { useState } from 'react'
import './App.css'
import { mockedPodcasts } from './mocks.js';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductsList.jsx';
import { filterItemsByName } from './utils/utils.jsx';


export default function FilterableList() {
  const [query, setQuery] = useState('');

  const filteredItems = filterItemsByName(mockedPodcasts, query)

  return (
    <>
      <SearchBar query={query} onType={(e) => setQuery(e.target.value)} />
      <ProductList products={mockedPodcasts} filterText={query} />
      {/* <ProductList items={filteredItems} /> */}
    </>
  );
}
