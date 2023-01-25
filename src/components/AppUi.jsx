import { useContext } from "react";
import { TodoContext } from "../context";
import Modal from "../modal";
import CreateTodoButton from "./CreateTodoButton";
import EmptyTodos from "./EmptyTodos";
import TodoCounter from "./TodoCounter";
import { TodoForm } from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import TodosError from "./TodosError";
import TodosLoading from "./TodosLoading";

const AppUi = () => {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext);
  return (
    <>
      <div className="container">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {error && <TodosError error={error} />}
          {loading && <TodosLoading /> }
          {!loading && !searchedTodos.length && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
    </>
  );
};

export default AppUi;
