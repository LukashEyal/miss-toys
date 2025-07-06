import { Link } from 'react-router-dom'

export function ToyPreview({ toy }) {
  return (
    <article className="toy-preview">
      <Link to={`/toy/${toy._id}`}>
        <img src="\src\assets\batman.png" alt={toy.name} />
      </Link>

      <h1>Toy ID : {toy._id} </h1>
      <h1>Toy Name : {toy.name}</h1>
      <h1>Toy Price: {toy.price}</h1>
      <h1>Label : {toy.label}</h1>
      <h1>Created at : {toy.createdAt}</h1>
      <h1>In Stock : {toy.inStock ? '✔️' : '❌'}</h1>
    </article>
  )
}
