import type { ItemId } from '../App'
export function Item({
  text,
  handleClick,
}: {
  id: ItemId
  text: string
  handleClick: () => void
}) {
  return (
    <li>
      <button onClick={handleClick}>❌</button>
      {text}
    </li>
  )
}
