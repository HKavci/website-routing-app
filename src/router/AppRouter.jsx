import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Armchair from './../pages/ArmChair';
import CarSeat from './../pages/CarSeat';
import Bed from './../pages/Bed';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/armchair' element={<Armchair />} />
        <Route path='/carseat' element={<CarSeat />} />
        <Route path='/bed' element={<Bed />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter