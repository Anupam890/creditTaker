import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Footer from "./layouts/Footer";
import BasketCredit from "./layouts/CredDash/BasketCredit";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basketcredits" element={<BasketCredit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
