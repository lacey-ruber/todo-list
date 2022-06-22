import React, { useState } from 'react'
import '../scss/components/_todoform.scss'

const TodoForm = ({ addListTask }) => {
  const [inputUser, setInputUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addListTask(inputUser)
    setInputUser('')
  }
  const handleChange = (e) => {
    setInputUser(e.currentTarget.value)
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form className='todo__form' onSubmit={handleSubmit}>
      <input
        className='todo__form-input'
        type='text'
        placeholder='Введите задачу...'
        value={inputUser}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button className='todo__form-btn'>Добавить</button>
    </form>
  )
}

export default TodoForm
