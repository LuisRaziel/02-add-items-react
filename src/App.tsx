import './App.css'
import { Item } from './components/Item'
import { useItem } from './hooks/useItems'

export type ItemId = `${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

// const INITIAL_ITEMS: Item[] = [
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: 'Libros  📚' },
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: 'Dulces 🍬'  },
//   { id: crypto.randomUUID(), timestamp: Date.now(), text: 'Cangrejos 🦀'  },
// ]

function App() {
  const { items, addItem, removeItem } = useItem()
  const handledSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return
    addItem(input.value)
    input.value = ''
  }

  const createHandledRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba Técnica</h1>
        <h2>Añadir y eliminar en una lista</h2>
        <form
          action=''
          onSubmit={handledSubmit}
          aria-label='Añadir items a la lista'
        >
          <label htmlFor=''>
            Elemento a introducir:
            <input type='text' name='item' required placeholder='Videojuegos' />
          </label>
          <button>añadir elemento</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        {items.length === 0 ? (
          <p>
            <strong>No hay elementos</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <Item
                  {...item}
                  handleClick={createHandledRemoveItem(item.id)}
                  key={item.id}
                />
              )
            })}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
