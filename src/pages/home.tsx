import { BsBell, BsShop } from "react-icons/bs";
import type { AddressProps } from "../@types/storetypes";
import { authenticationStore } from "../store/adminstore";

export const Home = () =>{

  const {adminDetails} = authenticationStore()
  console.log(adminDetails?.adminName)

  interface Store {
    storename : string,
    address : AddressProps[]
  }

  const headerInfor : Store[] = [
    {
      storename: "BarberShop",
      address: [
        {
          city: "Fortaleza",
          state: "Ceará",
          street: "Rua Brazil",
          number: "23",
          postalcode: "616303928",
          complement: "Bloco B, Apto 101",
          phone: "+55 85 98765-4321",
          country: "Brasil",
          latitude: -3.71722,
          longitude: -38.54375,
          openingHours: "Seg-Sex: 9h-19h, Sáb: 9h-14h"
        }
      ]
    }
  ];
  


  return(
<>
<header className="flex items-center justify-between">

<article className="flex gap-2 items-center">
<section className="bg-slate-300 w-12 h-12 grid place-content-center rounded-full">
 <BsShop size={24} />
 </section>

 {
    headerInfor.map(({storename, address }, index) =>(
      <section key={index}>
<h2 className="font-semibold">{storename}</h2>
<article className="flex flex-col gap-0">
  <ul className="flex text-[12px]">
  <li>{address.map(street => street.street)}-</li>
  <li>{address.map(street => street.number)} </li>
  {/* <li> {address.map(street => street.city)} ,</li>
  <li>{address.map(street => street.state)}</li> */}
  </ul>

</article>
      </section>
      
    ))
  }
</article>

<section className=" w-12 h-12 grid place-content-center rounded-full">
 <BsBell size={18} className="text-slate-800" />
 </section>

</header>
    <main>
      ["Agendamentos"]
    </main>
</>
  )
}