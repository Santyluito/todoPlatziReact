import React from 'react'
import '../css/TodoList.css'

const TodoList = (props) => {
  return (
    <section>
      {props.children}
    </section>
  )
}

export default TodoList