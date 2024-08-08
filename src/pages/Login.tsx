import { FieldSet } from "../components/FormsResister/fieldset"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import type { AdminUserProps } from "../@types/formsTypes";
import React, { useState } from "react";
import { ErrorField } from "../components/FormsResister/validationError";
import { createAdminUser } from "../controllers/creatadminuser";

export const Login = () => {


  const [status, setStatus] = useState<string>("")


  const signinValidation = Yup.object().shape({

    email: Yup.string()
      .required("Email é obrigatório")
      .email("Email inválido"),

    password: Yup.string()
      .required("Senha é obrigatória")
      .min(8, "Senha deve ter pelo menos 8 caracteres")
  });


  const { handleSubmit, register, formState: { errors } } = useForm({

    resolver: yupResolver(signinValidation)

  })

  const onSubmit = (data: AdminUserProps) => {
    // console.log(data)
    setStatus("Caregando....")
    createAdminUser(data).then(()=> setStatus("Sucesso")).catch((error) => setStatus(`Falha ao cadastrar ${error}`))
  }


  const [values, setvalues] = useState<AdminUserProps>({
    adminname: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
  
      <form action=""
        className="flex flex-col w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FieldSet
          labelDescription="Digite o seu nome"
          inputType="text"
          currentValue={values.adminname || undefined}
          currentId="adminname"
          currentPlaceHolder="Digite o seu nome"
          handleForminput={handleFormValues}
          register={register}
        />

        {
          errors.adminname && <ErrorField>
            {errors.adminname.message}
          </ErrorField>
        }

        <FieldSet
          labelDescription="Digite o seu Email"
          inputType="text"
          currentValue={values.email || undefined}
          currentId="email"
          currentPlaceHolder="Digite o seu email"
          handleForminput={handleFormValues}
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
          handleForminput={handleFormValues}
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
          handleForminput={handleFormValues}
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

      {status}
    </>
  )
}