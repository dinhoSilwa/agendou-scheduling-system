import { menuItems } from "../../models/menuOptions/menuSuper"
import { HeaderForms } from "../FormsResister/HeaderForms"
import { BiArrowBack } from "react-icons/bi"
import { useOpenToggle } from "../../store/menustore"


export const MenuSup = () =>{

  const {isOpen, toggleIsOpen} = useOpenToggle()

  const hanldeLogout = () =>{
    toggleIsOpen()
  }



  return(
    <>
{  isOpen &&
  <nav className="overflow-y-auto h-auto w-screen absolute top-0 left-0 bg-white py-8 px-2" >
    
    <h2 className="mb-4 flex justify-between items-center pr-4">
    <HeaderForms title="" />
    <BiArrowBack size={20} title="fechar Menu" onClick={toggleIsOpen}/>
    </h2>

      <ul className="flex flex-col first-of-type:font-semibold gap-2">
        {
          menuItems.map(({category, options}, index) =>(
          <li key={index} className="font-primary-outfit text-[16px]">
            {category}
            <ul className="py-2 flex flex-col gap-2">{options.map(({name}) =>(
              <li key={index} className="font-normal text-gray-700 text-[14px] hover:bg-brandColor py-2 px-2 rounded-lg" title={name} aria-label={name}>
                {name !== "sair" ? <span onClick={hanldeLogout}>{name}</span> : name}
                </li>
            ))}</ul>
            </li>
          ))
        }
      </ul>
    </nav>}
    </>
  )
}