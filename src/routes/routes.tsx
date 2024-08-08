import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Sing } from "../pages/Singin";
import { Login } from "../pages/Login";
import { Home } from "../pages/home";
import { authenticationStore } from "../store/adminstore";

export const AppRouter = () =>{
  const {deleteAdmin, adminDetails} = authenticationStore()

  console.log(adminDetails?.adminName)

  return(
    <Router>
      <nav className="bg-red-300">
        <ul>
          <li><Link to={'/cadastro'}>Ainda não tem Conta? clique Aqui</Link></li>
          <li><Link to={'/'}>Fazer Login</Link></li>
          <li onClick={deleteAdmin} className="cursor-pointer">
            <Link to={"/"}>Sair</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Sing />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </Router>
  )
}