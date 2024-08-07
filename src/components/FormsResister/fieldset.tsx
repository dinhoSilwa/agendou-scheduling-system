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
  list ?: string;
  register : UseFormRegister<any>; 
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
    <fieldset {...props}>
      <label htmlFor={currentId}>{labelDescription}</label>
      <input
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
      />

    </fieldset>
  );
};
