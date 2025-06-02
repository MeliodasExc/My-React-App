import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contacts from "../Pages/Contacts";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}
