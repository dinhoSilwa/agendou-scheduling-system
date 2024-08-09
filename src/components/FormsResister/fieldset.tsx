import type { ComponentProps } from "react";
import type { UseFormRegister } from "react-hook-form";

interface FieldSetFormsProps extends ComponentProps<'fieldset'> {
  labelDescription?: string | undefined;
  inputType: string | undefined;
  currentValue?: string;
  // remove current name for use register 
  // currentName: string | undefined;
  currentId: string;
  currentPlaceHolder?: string | undefined;
  list?: string;
  register: UseFormRegister<any>;
  handleForminput: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const FieldSet = ({
  labelDescription,
  inputType,
  currentValue,
  //currentName,
  currentId,
  currentPlaceHolder,
  handleForminput,
  list,
  register,
  ...props
}: FieldSetFormsProps) => {
  return (
    <fieldset {...props} className="flex flex-col gap-[8px]">
      <label 
      title="Campos Marcados com (*) são Obrigatórios"
      htmlFor={currentId}
      className="font-primary-outfit text-[10px] text-zinc-800 font-bold"
      >{labelDescription}</label>

      <input
        aria-label="email"
        autoComplete="email"
        type={inputType}
        value={currentValue}
        //name={currentName}
        id={currentId}
        placeholder={currentPlaceHolder}
        list={list}
        {...register(currentId)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          register(currentId).onChange(e); // Chama o onChange do register
          handleForminput(e); // Adiciona o manipulador personalizado
        }}
        className=" border-zinc-800 ring-1 ring-gray-800 px-1 text-[12px] h-8 rounded-md
        focus:ring-2 focus:ring-gray-900 text-gray-800 focus:font-semibold"
      />

    </fieldset>
  );
};
