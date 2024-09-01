import { Route, Routes } from "react-router-dom";

import "./App.css";
import "react-quill/dist/quill.snow.css";

import { ContextProvider } from "./context/ContextProvider";

import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Overview from "./pages/Overview/Overview";
import Analytics from "./pages/Analytics/Analytics";
import Tickets from "./pages/Tickets/Tickets";
import TicketDetails from "./pages/TicketDetails/TicketDetails";
import ManageAdmin from "./pages/ManageAdmin/ManageAdmin";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import AdminInfo from "./pages/AdminInfo/AdminInfo";
import UserInfo from "./pages/UserInfo/UserInfo";
import Roles from "./pages/Roles/Roles";
import Profile from "./pages/Profile/Profile";
import Security from "./pages/Security/Security";
import Faq from "./pages/Faq/Faq";
import FaqCreate from "./pages/FaqCreate/FaqCreate";
import FaqEdit from "./pages/FaqEdit/FaqEdit";
import FaqInfo from "./pages/FaqInfo/FaqInfo";
import Transfers from "./pages/Transfers/Transfers";
import TransferDetails from "./pages/TransferDetails/TransferDetails";
import Airtime from "./pages/Airtime/Airtime";
import AirtimeInfo from "./pages/AirtimeInfo/AirtimeInfo";
import Cable from "./pages/Cable/Cable";
import CableInfo from "./pages/CableInfo/CableInfo";
import Data from "./pages/Data/Data";
import DataInfo from "./pages/DataInfo/DataInfo";
import Betting from "./pages/Betting/Betting";
import BettingInfo from "./pages/BettingInfo/BettingInfo";

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
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tickets/info/:id" element={<TicketDetails />} />
          <Route path="/manage-admin" element={<ManageAdmin />} />
          <Route
            path="/manage-admin/admin-info/:userId"
            element={<AdminInfo />}
          />
          <Route path="/manage-user" element={<ManageUsers />} />
          <Route path="/manage-user/user-info/:userId" element={<UserInfo />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/security" element={<Security />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/faq/create" element={<FaqCreate />} />
          <Route path="/faq/edit/:faqId" element={<FaqEdit />} />
          <Route path="/faq/info/:faqId" element={<FaqInfo />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route
            path="/transfers/info/:transactionId"
            element={<TransferDetails />}
          />
          <Route path="/airtime" element={<Airtime />} />
          <Route
            path="/airtime/info/:transactionId"
            element={<AirtimeInfo />}
          />
          <Route path="/cable" element={<Cable />} />
          <Route path="/cable/info/:transactionId" element={<CableInfo />} />
          <Route path="/data" element={<Data />} />
          <Route path="/data/info/:transactionId" element={<DataInfo />} />
          <Route path="/betting" element={<Betting />} />
          <Route
            path="/betting/info/:transactionId"
            element={<BettingInfo />}
          />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
