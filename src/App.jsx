import { Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./pages/Login/Login";
import Overview from "./pages/Overview/Overview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
}

export default App;
