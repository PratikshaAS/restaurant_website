import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import Dish from './Dish';
import Footer from './Footer';

const Maincomponent = () => {
  return (
    <div>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Homepage/>}/>
        {/* <Route index element={<Homepage />} /> */}
        <Route path="/dish" element={<Dish />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  <Footer/>
    </div>



  )
}

export default Maincomponent