import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/home.jsx";

import './App.scss';

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
