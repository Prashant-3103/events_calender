import React from "react";
import './App.css';
import Oauth from "./components/Index";
import About from "./components/About";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";





function App() {


  return (

 <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/sign-in" element={<Oauth/>}/>
  <Route path ='/about' element ={<About />} />
</Routes>
</BrowserRouter>

<Footer/>
 </div>
  );
}

export default App;


