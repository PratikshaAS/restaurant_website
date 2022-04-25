import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import Dish from './Dish';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

const Maincomponent = () => {
  return (
    <div>
    <Header/>
    
    <Routes>
      <Route path="/" element={< Homepage/>}/>
        {/* <Route index element={<Homepage />} /> */}
        <Route path="/dish" element={<Dish />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      {/* </Route> */}
    </Routes>
  <Footer/>
    </div>



  )
}

export default Maincomponent