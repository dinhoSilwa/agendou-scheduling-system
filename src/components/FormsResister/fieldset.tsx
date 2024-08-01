import type { ComponentProps } from "react";

interface FieldSetFormsProps extends ComponentProps<'fieldset'> {
  labelDescription?: string | undefined;
  inputType: string | undefined;
  currentValue?: string;
  currentName: string | undefined;
  currentId: string | undefined;
  currentPlaceHolder?: string | undefined;
  list ?: string;
  handleForminput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FieldSet = ({
  labelDescription,
  inputType,
  currentValue,
  currentName,
  currentId,
  currentPlaceHolder,
  handleForminput,
  list,
  ...props
}: FieldSetFormsProps) => {
  return (
    <fieldset {...props}>
      <label htmlFor={currentId}>{labelDescription}</label>
      <input
        type={inputType}
        value={currentValue}
        name={currentName}
        id={currentId}
        placeholder={currentPlaceHolder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleForminput(e)}
        list={list}
      />
    </fieldset>
  );
};
