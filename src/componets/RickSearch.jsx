import { Placeholder } from "react-bootstrap"

const RickSearch = ({setSearch}) => {
  return (
    <form className="busqueda">
        <label htmlFor="search"></label>
        <input type="text"
        placeholder="Buscar..."
        name="search"
        onChange={e=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default RickSearch