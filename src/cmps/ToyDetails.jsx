import { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'

export function ToyDetails() {
  const [toy, setToy] = useState(null)
  const params = useParams()
  useEffect(() => {
    loadToy()
  }, [])
  function loadToy() {
    const toyId = params.toyId
    toyService
      .getById(toyId)
      .then(setToy)
      .catch((err) => console.log('cannot load toy', err))
  }
  if (!toy) return <div>Loading...</div>

  const { name, price, labels, inStock } = toy
  return (
    <article>
      <h1>{name}</h1>

      <div className="details">
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <div className="toy-labels"></div>
        <p>
          <strong>Status:</strong> {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
      <Link to="/toy">Back to List</Link>
    </article>
  )
}
