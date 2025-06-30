export function ToyPreview({ toy }) {
  return (
    <article className="toy-preview">
      <h1>Toy ID : {toy._id} </h1>
      <h1>Toy Name : {toy.name}</h1>
      <h1>Toy Price: {toy.price}</h1>
      <h1>Label : {toy.label}</h1>
      <h1>Created at : {toy.createdAt}</h1>
      <h1>In Stock : {toy.inStock ? '✔️' : '❌'}</h1>
    </article>
  )
}
