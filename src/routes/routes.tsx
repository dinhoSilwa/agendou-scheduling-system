import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Sing } from "../pages/Singin";
import { Login } from "../pages/Login";
import { Home } from "../pages/home";

export const AppRouter = () =>{

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Sing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}