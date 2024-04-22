import Navbar from "../Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Home from "../Pages/Home";
import Contact from "../Pages/Contact"
import Footer from "../Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <div>
      <BrowserRouter>

      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route to="/" element={} /> */}
      <Route path="/contact" element={<Contact/>} />
      {/* <Route to="/" element={} /> */}
      </Routes >
      
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
