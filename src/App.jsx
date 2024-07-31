import { Route, Routes } from "react-router-dom";

import "./App.css";

import { ContextProvider } from "./context/ContextProvider";

import Login from "./pages/Login/Login";
import Overview from "./pages/Overview/Overview";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
