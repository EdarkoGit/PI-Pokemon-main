import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Create from "./components/Create/Create";
import DefaultHome from "./components/DefaultHome/DefaultHome";
import { AppStyle } from "./AppStyle";
import Delete from "./components/Delete/Delete";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getTypes } from "./redux/actions/pokemons";
import Detail from "./components/Detail/Detail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <AppStyle className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<Home />}>
          <Route path="" element={<DefaultHome />} />
          <Route path="create" element={<Create />} />
          <Route path="delete" element={<Delete />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </AppStyle>
  );
}

export default App;
