import Navbar from "../Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Home from "../Pages/Home";
import Contact from "../Pages/Contact"
import Footer from "../Components/Footer";
import Services from "../Pages/Services"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "../Pages/Store";
function App() {
 

  return (
    <div>
      <BrowserRouter>

      <Navbar/>
   
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/store" element={<Store/>} />
      
      </Routes >
      
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
