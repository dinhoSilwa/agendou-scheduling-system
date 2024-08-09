
import { authenticationStore } from "../store/adminstore";
import { CreateNewComponente } from "../components/HomeBanner/banner";
import { Navigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { bannerBusiness, bannerSch, bannerServices } from "../models/bannersContent.tsx/bannerText";
import { TbToolsOff } from "react-icons/tb";
import { IoStorefront } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { MenuSup } from "../components/Menu/supermenu";
import { useOpenToggle } from "../store/menustore";

export const Home = () =>{

  const {adminDetails} = authenticationStore()
  const {toggleIsOpen} = useOpenToggle()


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
  <nav className="h-8 w-8 grid place-content-center bg-white rounded-full p-2" aria-label="navegação"
   onClick={toggleIsOpen}
  >
 <li className="list-none"

 >
 <TiThMenu size={20} />

 </li>
  </nav>
  <MenuSup/>
  {/* <FaBell /> */}


</article>
</header>


<section className="flex flex-col gap-6">
  

<article>
<h1 className="pl-4 text font-bold font-primary-outfit text-[12px] mb-2">Estabelecimentos:</h1>
{
  bannerBusiness.map(({title, subtitle, action}, index) =>(
    <CreateNewComponente IconElement={<IoStorefront />} title={title} subtitle={subtitle} action={action} key={index} />

  ))
}
</article>

<article >
<h1 className="pl-4 text font-bold font-primary-outfit text-[12px] mb-2">Serviços:</h1>
{
  bannerServices.map(({title, subtitle, action}, index) =>(
    <CreateNewComponente IconElement={<TbToolsOff />} title={title} subtitle={subtitle} action={action} key={index} />

  ))
}
</article>

<article >
<h1 className="pl-4 text font-bold font-primary-outfit text-[12px] mb-2">Agendamentos:</h1>
{
  bannerSch.map(({title, subtitle, action}, index) =>(
    <CreateNewComponente IconElement={<IoIosTime />} title={title} subtitle={subtitle} action={action} key={index} />

  ))
}
</article>











</section>


</main>
</>
  )
}