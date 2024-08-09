import { IoStorefront } from "react-icons/io5"

export const CreateNewComponente = () =>{
  return(
    <>
    <section className="bg-gray-100 w-[92%] ml-auto mr-auto rounded-xl px-4 py-8 flex flex-col gap-4">

      <section className="flex flex-col gap-[16px]">

        <h2 className="text-gray-900 font-bold leading-4 font-primary-outfit text-[14px] pr-8">Nenhum Estabelecimento Encontrado</h2>
        <p className="text-[12px] leading-4 text-gray-500">Insira os dados do seu negócio e comece a agendar atendimentos!</p>
      </section>
<button className="flex w-[60%] items-center gap-2 bg-green-600 text-white font-bold h-12 px-4 rounded-md text-[14px] shadow-sm shadow-green-700">
<IoStorefront size={18} />
  Adicionar
  </button>
    </section>
    </>
  )
}