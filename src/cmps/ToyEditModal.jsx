import { useEffect, useState } from 'react'
import { toyService } from '../services/toy.service'
import { useSelector, useDispatch } from 'react-redux'
import { loadToys, setFilter } from '../store/actions/toy.actions.js'

export function ToyEditModal({ toyId, onClose }) {
  const [toy, setToy] = useState(null)

  useEffect(() => {
    console.log('Modal opened with toyId:', toyId) // Debug
    toyService.getById(toyId).then(setToy)
  }, [toyId])

  function handleChange({ target }) {
    const { name, value, type, checked } = target
    const newValue =
      type === 'checkbox'
        ? checked
        : name === 'price'
        ? +value
        : name === 'createdAt'
        ? new Date(value).getTime()
        : value

    setToy((prev) => ({ ...prev, [name]: newValue }))
  }

  function onSave(ev) {
    ev.preventDefault()
    toyService.save(toy).then(() => {
      loadToys() // Refresh toys list
      onClose() // Close modal
    })
  }

  if (!toy)
    return (
      <div className="modal-overlay">
        <div className="modal">
          <p>Loading...</p>
        </div>
      </div>
    )

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Edit Toy: {toy.name}</h2>
        <form onSubmit={onSave}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={toy.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={toy.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Label:
            <input
              type="text"
              name="labels"
              value={toy.labels || ''}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Created At:
            <input
              type="datetime-local"
              name="createdAt"
              value={
                toy.createdAt && !isNaN(new Date(toy.createdAt))
                  ? new Date(toy.createdAt).toISOString().slice(0, 16)
                  : ''
              }
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            In Stock:
            <input
              type="checkbox"
              name="inStock"
              checked={toy.inStock}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}
