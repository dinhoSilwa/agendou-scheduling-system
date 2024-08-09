

import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FaCut, FaPlusSquare } from "react-icons/fa";
import { FaHouseMedical } from "react-icons/fa6";
import { PiHairDryerFill } from "react-icons/pi";


export const LoadingPage = () =>{

  const [count, setCount] = useState(0); // Usando useState para armazenar o valor de count
  let time = 2000
  useEffect(() => {
    const animateInterval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount > 3 ? 0 : newCount; // Reseta para 0 quando atingir 5
      });
    }, time); 

    return () => clearInterval(animateInterval); // Limpa o intervalo quando o componente é desmontado
  }, [time]);

const bussinesname = ["Clinica médica", "Barbearia", "Salão de Beleza", "E muito Mais"]
const bussinesIcons = [<FaHouseMedical />, <FaCut />, <PiHairDryerFill />, <FaPlusSquare />

]

  return(
    <>
    <section className="h-screen w-screen fixed bg-gray-100 grid place-content-center gap-4">
    

    <header className='w-[320px] flex justify-center'>
    <h1 className="text-[14px] text-gray-700 font-semibold">Agendamento Eficiente Para:</h1>
    
    </header>

      <div className='animate-text-1 flex items-center justify-center gap-2 w-[320px]'>
        <figure className="h-8 w-8 grid place-content-center rounded-md bg-brandColor">
        {bussinesIcons[count]}
        
        </figure>
        <p className="font-semibold  flex flex-col">
        <span className="transition-all animate-none text-center font-bold font-primary-outfit text-[28px] text-gray-900 leading-8"> {bussinesname[count]}</span>
        </p>
       
      </div >
        <span className="flex gap-1 items-center justify-center mt-12"><CgSpinner className="animate-spin" size={12} /> <span className="animate-pulse text-[8px]">Carregando...</span> </span>
    

    </section>
    </>
  )
}