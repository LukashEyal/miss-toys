export function ToysList({ toys }) {
  return (
    <ul className="toys-list">
      {toys.map((toys) => (
        <li key={toys._id}></li>
      ))}
    </ul>
  )
}
