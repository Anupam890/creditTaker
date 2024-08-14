import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Footer from "./layouts/Footer";
import BasketCredit from "./layouts/CredDash/BasketCredit";
//Admin Route
import AdminComp from "./layouts/admin/AdminComp";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basketcredits" element={<BasketCredit />} />
          <Route path="admin-panel" element={<AdminComp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
