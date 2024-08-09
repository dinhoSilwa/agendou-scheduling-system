import type { ComponentProps } from "react"

interface iconProps {
  size?: number
}
interface bannerProps extends ComponentProps<'section'>{
  title : string,
  subtitle : string,
  action : string,
  IconElement : React.ReactNode
  
}

export const CreateNewComponente = ({
 title, subtitle,action, IconElement, ...props
} : bannerProps) =>{
  return(
    <>
    <section {...props} className="bg-gray-100 w-[92%] ml-auto mr-auto rounded-xl px-4 py-8 flex flex-col gap-4 animation-scrool">

      <section className="flex flex-col gap-[16px]">

        <h2 className="text-gray-900 font-bold leading-4 font-primary-outfit text-[14px] pr-8">{title}</h2>
        <p className="text-[12px] leading-4 text-gray-500">{subtitle}</p>
      </section>
<button className="flex w-[60%] items-center gap-2 ring-2 ring-green-400 text-green-700 font-bold h-12 px-4 rounded-md text-[14px] shadow-sm shadow-green-700">
{IconElement}

  {action}
  </button>
    </section>
    </>
  )
}