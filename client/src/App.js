import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Create from "./components/Create/Create";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/*" element={<Home />}>
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
