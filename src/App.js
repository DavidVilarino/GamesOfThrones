import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from "./pages/home/Home";
import Casas from "./pages/casas/Casas";
import Personajes from "./pages/personajes/Personajes";
import Cronologia from "./pages/cronologia/Cronologia";
import Flags from "./components/flags/Flags";
import PersonajesDetail from "./pages/personajesDetail/PersonajesDetail"
import CasasDetail from "./pages/casasDetail/CasasDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Flags/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/personajes" element={<Personajes/>}/>
          <Route path="/casas" element={<Casas/>}/>
          <Route path="/cronologia" element={<Cronologia/>}/>
          <Route path="/personaje/:name" element={<PersonajesDetail/>}/>
          <Route path="/casas/:name" element={<CasasDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

