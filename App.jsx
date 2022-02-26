import "./App.css";
import { Routes, Route } from "react-router";
//import { Home } from "./component/Home";

import { Firsthome } from "./component/Firsthome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Firsthome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
