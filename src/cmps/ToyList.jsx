import { useState } from 'react'
import { ToyEditModal } from './ToyEditModal'
import { ToyPreview } from './ToyPreview'
import { useSelector, useDispatch } from 'react-redux'
import { toyService } from '../services/toy.service'

export function ToysList({ toys = [], onRemoveToy }) {
  const [editToyId, setEditToyId] = useState(null)

  return (
    <div>
      <h1>Toy List</h1>
      <ul>
        {toys.map((toy) => (
          <li key={toy._id}>
            <ToyPreview toy={toy} />
            <button onClick={() => setEditToyId(toy._id)}>Edit</button>
            <button onClick={() => onRemoveToy(toy._id)}></button>
          </li>
        ))}
      </ul>

      {editToyId && (
        <ToyEditModal toyId={editToyId} onClose={() => setEditToyId(null)} />
      )}
    </div>
  )
}
