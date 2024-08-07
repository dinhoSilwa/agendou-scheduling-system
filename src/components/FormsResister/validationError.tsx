import type { ComponentProps } from "react"

interface ErrorProps extends ComponentProps<'span'>{
  children : React.ReactNode
}
export const ErrorField = ({children, ...props} : ErrorProps) =>{
  return(
    <>
    <span {...props} className="bg-red-400 text-red-900 font-bold px-4 py-2">
    {children}
        </span>
    </>
  )
}