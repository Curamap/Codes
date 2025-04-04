import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
import FindMeds from "./pages/FindMeds";
import TransactionSuccess from "./pages/TransactionSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/findmeds" element={<FindMeds />} />
      <Route path="/transactionsuccess" element={<TransactionSuccess/>}/>
    </Routes>
  );
}

export default App;
