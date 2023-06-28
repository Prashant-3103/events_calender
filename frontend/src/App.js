import React from "react";
import './App.css';
import Oauth from "./components/Index";

import {BrowserRouter, Routes, Route} from "react-router-dom"




function App() {


  return (

 <div className="App">
<BrowserRouter>


<Routes>
  <Route path="/home" element={<Oauth/>}/>
</Routes>
</BrowserRouter>


 </div>
  );
}

export default App;



