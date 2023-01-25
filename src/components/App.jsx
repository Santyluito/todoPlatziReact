import { TodoProvider } from "../context";
import "../css/App.css";
import AppUi from "./AppUi";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a react", completed: false },
//   { text: "Jugar con la churona", completed: true },
//   { text: "Jugar con la sss", completed: true },
// ];


function App() {
  
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
