import type { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  actiontext: string
}

export const ButtonForms = ({ actiontext, ...props }: ButtonProps) => {
  return (
    <>
      <button {...props}
        className="
          px-2 py-2 rounded-lg h-10 text-white bg-brandColor
          hover:text-gray-950
          hover:font-bold
          
          " type="submit">
        {actiontext}
      </button>
    </>
  )
}