import React, { useState } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}`

interface Item {
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
  const [items, setItems] = useState<Item[]>([])

  const handledSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now(),
    }
    setItems((prevItems) => {
      return [...prevItems, newItem]
    })

    input.value = ''

  }

  const createHandledRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((prevItem) => prevItem.id !== id)
    })
  }

  return (
    <main>
      <aside>
        <h1>Prueba Técnica</h1>
        <h2>Añadir y eliminar en una lista</h2>
        <form action='' onSubmit={handledSubmit} aria-label='Añadir items a la lista'>
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
            {items.map((item) => (
              <li key={item.id}>
                <button onClick={createHandledRemoveItem(item.id)}>❌</button>
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
