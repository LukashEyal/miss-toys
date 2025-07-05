import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export function ToyFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { name: field, value, type } = target
    switch (type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
      case 'select-one':
        if (field === 'inStock')
          value = value === 'true' ? true : value === 'false' ? false : ''
        break
      default:
        break
    }
    const newFilterBy = { ...filterByToEdit, [field]: value }
    setFilterByToEdit(newFilterBy)
  }

  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilterBy(filterByToEdit)
  }

  const { name = '', label = '', inStock = '', sortBy = '' } = filterByToEdit

  return (
    <section className="toy-filter">
      <h2>Filter Toys</h2>
      <form onSubmit={onSubmitFilter}>
        <input
          value={name}
          onChange={handleChange}
          type="search"
          placeholder="By Name"
          id="name"
          name="name"
        />
        <select name="label" value={label} onChange={handleChange}>
          <option value="">All Labels</option>
          <option value="On wheels">On wheels</option>
          <option value="Box game">Box game</option>
          <option value="Art">Art</option>
          <option value="Baby">Baby</option>
          <option value="Doll">Doll</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Battery Powered">Battery Powered</option>
        </select>

        <select name="inStock" value={inStock} onChange={handleChange}>
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>

        <select name="sortBy" value={sortBy} onChange={handleChange}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="createdAt">Created</option>
        </select>

        <button hidden>Set Filter</button>
      </form>
    </section>
  )
}
