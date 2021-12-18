import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Create from "./components/Create/Create";
import Pokemons from "./components/Pokemons/Pokemons";
import { AppStyle } from "./AppStyle";
function App() {
  return (
    <AppStyle className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<Home />}>
          <Route path="" element={<Pokemons />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </AppStyle>
  );
}

export default App;
