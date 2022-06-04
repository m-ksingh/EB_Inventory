import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from './component/Pop/Invoice';
import Inventory from './Page/Inventory';
import Signin from './Page/Signin/Signin';
import { AuthProvider } from './component/Utils/Auth';
import RequireAuth from "./component/ProtectedRoute/RequireAuth";
import Home from './Page/Layouts/Home';

function App() {
  return (
    <div >
     {/* <Inventory/> */}
     {/* <Invoice/> */}
{/* <Signin/> */}

<AuthProvider>
  <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Signin />}/>
  <Route exact path="/inventory" element={<RequireAuth><Home/></RequireAuth>}/>
  </Routes>
  </BrowserRouter>
</AuthProvider>
    </div>
  );
}

export default App;
