import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Routes/Home";
import React from 'react';
import Prelist from "./Routes/Prelist";
import Socials from "./section/Socials/Socials";
import Form from "./section/Form/Form";
//s
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="prelist" element={<Prelist />} />
         <Route path="*" element={<><Form /><Socials /></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
