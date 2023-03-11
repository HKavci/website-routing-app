import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import Services from './../pages/Services';
import Contact from "../pages/Contact"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter