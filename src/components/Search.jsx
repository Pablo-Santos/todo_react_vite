import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
      <h2>Persiquizer</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para perquisar..." />
    </div>
  )
}

export default Search