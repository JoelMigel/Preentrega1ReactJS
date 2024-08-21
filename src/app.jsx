import { ItemListContainer } from './Components/ItemListContainer'
import { NavBar } from './Components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a la tienda de Machos!" />
    </>
  )
}

export default App