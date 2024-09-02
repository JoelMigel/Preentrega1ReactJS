import { Itemlistcontainer } from "./components/ItemListContainer/itemlistcontainer";
import { Navbar } from "./components/NavBar/navbar";

function App() {

  return (
    <>
      <Navbar/>
      <Itemlistcontainer greeting="Bienvenidos a mi tienda" />
    </>
  )
}

export default App