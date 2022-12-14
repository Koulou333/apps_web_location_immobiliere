import React from 'react'
import { useState } from 'react'
import '../styles/Accordion.css'
import up from '../assets/up.svg'
import down from '../assets/down.svg'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  if (Array.isArray(content)) {
    return (
      <div className='accordion-item'>
        <div
          className='accordion-vector'
          onClick={() => setIsActive(!isActive)}
        >
          <div className='accordion-title'>{title}</div>
          <div>
            {isActive ? (
              <img src={up} alt='up' />
            ) : (
              <img src={down} alt='down' />
            )}
          </div>
        </div>
        {isActive && (
          <ul className='accordion-content margin-array'>
            {content?.map((cont, index) => (
              <li key={index} className='array'>
                {cont}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  } else {
    return (
      <div className='accordion-item'>
        <div
          className='accordion-vector'
          onClick={() => setIsActive(!isActive)}
        >
          <div className='accordion-title'>{title}</div>
          <div>
            {isActive ? (
              <img src={up} alt='up' />
            ) : (
              <img src={down} alt='down' />
            )}
          </div>
        </div>
        {isActive && <div className='accordion-content'>{content}</div>}
      </div>
    )
  }
}

export default Accordion
