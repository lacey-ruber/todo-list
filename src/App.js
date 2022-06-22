import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './scss/index.scss'

function App() {
  const [items, setItems] = useState([])

  const addListTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      }
      setItems([...items, newTask])
    }
  }
  const removeTask = (id) => {
    setItems([...items.filter((item) => item.id !== id)])
  }
  const handleToggle = (id) => {
    setItems([
      ...items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : { ...item }
      ),
    ])
  }
  const displayNoTasks = (
    <span className='help-text'>Сегодня нет дел, ура😃</span>
  )

  return (
    <div className='todo'>
      <Sidebar items={items} />
      <div className='todo__wrapper'>
        <TodoForm addListTask={addListTask} />
        <ul className='todo__list'>
          {items.length > 0
            ? items.map((item) => {
                return (
                  <TodoList
                    item={item}
                    key={item.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                  />
                )
              })
            : displayNoTasks}
        </ul>
      </div>
    </div>
  )
}

export default App
