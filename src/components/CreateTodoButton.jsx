import React from 'react'
import '../css/CreateTodoButton.css'

const CreateTodoButton = (props) => {
  const onClicBtn = () => {
    props.setOpenModal(prevState => !prevState)
  }
  return (
    <div className='btn' onClick={onClicBtn}>
      <button className='btn-plus'>+</button>
    </div>
  )
}

export default CreateTodoButton