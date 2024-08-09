import type { ComponentProps } from 'react'
import logo from '../../assets/logo.png'

interface HeaderProps extends ComponentProps<'header'>{
  title : string,
  subtitle? : string

}


export const HeaderForms = ({title, subtitle, ...props} : HeaderProps) =>{
  
  return(
    <>
    
    <header className="flex h-auto flex-col gap-4" {...props}>
          <figure>
            <img src={logo} alt="" className="w-[128px]" />
          </figure>
          <section className="flex flex-col gap-[4px]">
            <h2 className="font-bold text-[16px] text-zinc-900 font-primary-outfit">{title}</h2>
            <p className="text-zinc-500 text-[14px] font-primary-outfit leading-[16px]">{subtitle}
            </p>
          </section>
        </header>
    </>
  )
}