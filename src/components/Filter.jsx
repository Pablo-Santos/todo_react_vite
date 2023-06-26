import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filters'>
      <h2>Filtrar</h2>
      <div className="filter_options">
        <div>
          <p>Statuss:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Imcompleted">Imcompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabetica:</p>
          <button onClick={()=> setSort("Asc")}>Asc</button>
          <button onClick={()=> setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter