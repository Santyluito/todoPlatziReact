import React, { useContext } from 'react';
import { TodoContext } from '../context';
import '../css/TodoCount.css';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <header>
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} ToDo's</h2>
    </header>
  )
}

export default TodoCounter