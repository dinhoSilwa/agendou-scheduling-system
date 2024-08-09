import { BsBell, BsShop } from "react-icons/bs";
import type { AddressProps } from "../@types/storetypes";
import { authenticationStore } from "../store/adminstore";
import { CreateNewComponente } from "../components/HomeBanner/banner";
import { Link, Navigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaBell } from "react-icons/fa";

export const Home = () =>{

  const {adminDetails, deleteAdmin} = authenticationStore()

  if(!adminDetails?.adminName){
    return <Navigate to={'/'} />
  }
  
  return(
<>
<main className="bg-gray-200 h-auto">
<header className="flex items-center justify-between px-4 h-24">
<article className="flex items-center gap-2">
<figure className="w-8 h-8 bg-red-600 rounded-full">
    <img src="" alt="" />
  </figure>
  <h2 className="text-[14px] font-bold font-primary-outfit">Bem vindo, <span className="first-letter:uppercase">{adminDetails?.adminName}</span></h2>

</article>

<article className="flex gap-2">
  <nav className="h-8 w-8 grid place-content-center bg-white rounded-full p-2" aria-label="navegação">
 <li className="list-none">
 <TiThMenu size={20} />
 </li>
  </nav>
  {/* <FaBell /> */}


</article>
</header>


<section>
<article className="px-4">
<h1 className="text font-bold font-primary-outfit text-[12px] mb-2">Estabelecimentos</h1>
</article>
<CreateNewComponente />
</section>

<section>
<article className="px-4">
<h1 className="text font-bold font-primary-outfit text-[12px] mb-2">Serviços</h1>
</article>
<CreateNewComponente />
</section>


    <Link to={'/'} onClick={deleteAdmin}>Sair</Link>
</main>
</>
  )
}