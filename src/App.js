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
import Terminos from "./Routes/Terminos";
//s
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="prelista" element={<Prelist />} />
         <Route path="terminos" element={<Terminos />} />
         <Route path="*" element={<><Form /><Socials /></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
