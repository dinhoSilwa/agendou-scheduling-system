import { FieldSet } from "../components/FormsResister/fieldset"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import type { AdminUserLoginProps } from "../@types/formsTypes";
import React, { useState } from "react";
import { ErrorField } from "../components/FormsResister/validationError";
// import { getAdminUser } from "../controllers/getadminusers";
import { getAdminUser } from "../controllers/getadminusers";

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

  const onSubmit = async (data: AdminUserLoginProps) => {

 getAdminUser(data).then(() => setStatus('Altenticado')
  
  )
    .catch((error) => {throw new Error(error), setStatus('Falha ao Altenticar')})
  }


  const [values, setvalues] = useState<AdminUserLoginProps>({
    email: '',
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