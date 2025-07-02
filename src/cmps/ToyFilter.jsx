import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export function ToyFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy || { name: '' })

  useEffect(() => {
    // Notify parent
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

  // Optional support for LAZY Filtering with a button
  function onSubmitFilter(ev) {
    ev.preventDefault()
    onSetFilterBy(filterByToEdit)
  }

  const { name = '' } = filterByToEdit

  return (
    <section className="toy-filter">
      <h2>Filter Toys</h2>
      <form onSubmit={onSubmitFilter}>
        <input
          value={name}
          onChange={handleChange}
          type="search"
          placeholder="By Txt"
          id="name"
          name="name"
        />

        <button hidden>Set Filter</button>
      </form>
    </section>
  )
}
