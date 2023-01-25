import { useContext, useState } from "react"
import { TodoContext } from "../context"

export const TodoForm = () => {

  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onWrite = (e) => {
    setNewTodoValue(e.target.value)
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <div className="content-add">
      <form onSubmit={onSubmit}>
        <label htmlFor="">Escribe la nueva tarea</label>
        <textarea placeholder="Cortar la cebolla para el almuerzo" value={newTodoValue} onChange={onWrite} />
        <div className="btn-modal">
          <button type="button" onClick={onCancel}>Cancelar</button>
          <button type="submit">Agregar</button>
        </div>
      </form>
    </div>
  )
}
