import React, { useState } from 'react'
import '../scss/components/_sidebar.scss'

const Sidebar = ({ items }) => {
  const [categoryName, setCategoryName] = useState('')

  // const listCategories = () => {
  //   if(folder) {
  //     const newFolder = {
  //       value: folder
  //     }
  //   }
  // }

  return (
    <aside className='sidebar'>
      <h1 className='sidebar__title'>Количество задач: {items.length}</h1>
      <ul className='sidebar__list'>
        <li className='sidebar__item'>
          <div className='sidebar__item-icon'>😃</div>
          <span className='sidebar__item-text'>Покупки</span>
          <div className='sidebar__remove'>
            <svg fill='none' height='22' viewBox='0 0 24 24' width='22'>
              <path
                d='M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </li>

        <div className='sidebar__newfolder'>
          <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
            <path
              d='M6 1V11'
              stroke='#868686'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M1 6H11'
              stroke='#868686'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span>Добавить папку</span>
        </div>
      </ul>
    </aside>
  )
}

export default Sidebar
