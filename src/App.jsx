import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./component/articles/Listarticles"
import Listcategorie from "./component/categories/Listcategorie"
import Listscategorie from "./component/scategoriess/Listscategorie"
import Menu from "./component/Menu"

function App() {

  return (
    <>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles />} />
        <Route path="/categories" element={<Listcategorie />} />
        <Route path="/scategories" element={<Listscategorie />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
