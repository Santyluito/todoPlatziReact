import React from 'react'
import '../css/TodoItem.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './Deleteicon'

const TodoItem = (props) => {
  return (
    <li className='TodoItem'>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
      {/* <span className={props.completed ? 'TodoItem-span--complete' : ''} onClick={props.onComplete}>{props.completed ? '👍' : '⭕'}</span>
      <p className={props.completed ? `TodoItem-p--complete`:''}>{props.text}</p>
      <span className='close' onClick={props.onDelete} >🗑️</span> */}
    </li>
  )
}

export default TodoItem