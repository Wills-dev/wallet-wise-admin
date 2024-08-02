import { Route, Routes } from "react-router-dom";

import "./App.css";

import { ContextProvider } from "./context/ContextProvider";

import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Overview from "./pages/Overview/Overview";
import Analytics from "./pages/Analytics/Analytics";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
