import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Carouselled from "./components/Carouselled";
import Uploadmatch from "./components/Uploadmatch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fixtures from "./components/Fixtures";
import UpdateScores from "./components/UpdateScores";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Carouselled />}></Route>
          <Route path="/upload" element={<Uploadmatch />}></Route>
          <Route path="/fixtures" element={<Fixtures />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/update" element={<UpdateScores />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
