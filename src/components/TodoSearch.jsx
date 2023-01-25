
import { useContext } from 'react';
import { TodoContext } from '../context';
import '../css/TodoSearch.css'

export const TodoSearch = () => {

  const { search, setSearch } = useContext(TodoContext)

  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  };

  return (
    <input placeholder="Cebolla" value={search} onChange={onSearchValueChange} />
  )
}
