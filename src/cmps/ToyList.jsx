import { ToyPreview } from './ToyPreview'

export function ToysList({ toys }) {
  console.log('toys', toys)

  return (
    <ul className="toys-list">
      {toys.map((toy) => (
        <li key={toy._id}>
          <ToyPreview toy={toy} />
        </li>
      ))}
    </ul>
  )
}
