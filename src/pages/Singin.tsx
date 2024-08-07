import { FieldSet } from "../components/FormsResister/fieldset"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import type { AdminUserProps } from "../@types/formsTypes";
import React, { useState } from "react";
import { ErrorField } from "../components/FormsResister/validationError";

export const Sing = () => {

  const singinValidation = Yup.object().shape({
    adiminame: Yup.string().required("Digite o nome"),
    email: Yup.string().required("Digite o email"),
    phone: Yup.string().required("Digite o Telefone"),
    password: Yup.string().required("Digite a Senha")
  })

  const { handleSubmit, register, formState: { errors } } = useForm({

    resolver: yupResolver(singinValidation)

  })

  const onSubmit = (data: AdminUserProps) => {
    console.log(data)
  }

  const [values, setvalues] = useState<AdminUserProps>({
    adiminame: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <form action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldSet
          labelDescription="Digite o seu nome"
          inputType="text"
          currentValue={values.adiminame || undefined}
          currentId="adiminame"
          currentPlaceHolder="Digite o seu nome"
          handleForminput={handleValues}
          register={register}
        />

        {
          errors.adiminame && <ErrorField>
            {errors.adiminame.message}
          </ErrorField>
        }

        <FieldSet
          labelDescription="Digite o seu Email"
          inputType="text"
          currentValue={values.email || undefined}
          currentId="email"
          currentPlaceHolder="Digite o seu email"
          handleForminput={handleValues}
          register={register}
        />

        {
          errors.email && <ErrorField>
            {errors.email.message}
          </ErrorField>
        }

        <FieldSet
          labelDescription="Digite o seu Telefone"
          inputType="text"
          currentValue={values.phone || undefined}
          currentId="phone"
          currentPlaceHolder="Digite o seu Telefone"
          handleForminput={handleValues}
          register={register}
        />

        {
          errors.phone && <ErrorField>
            {errors.phone.message}
          </ErrorField>
        }

        <FieldSet
          labelDescription="Defina uma Senha"
          inputType="text"
          currentValue={values.password || undefined}
          currentId="password"
          currentPlaceHolder="Criar Senha"
          handleForminput={handleValues}
          register={register}
        />

        {
          errors.password && <ErrorField>
            {errors.password.message}
          </ErrorField>
        }

        <button className="px-2 py-2 bg-green-600" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  )
}