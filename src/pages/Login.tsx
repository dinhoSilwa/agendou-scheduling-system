import { FieldSet } from "../components/FormsResister/fieldset"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import type { AdminUserLoginProps } from "../@types/formsTypes";
import React, { useEffect, useState } from "react";
import { ErrorField } from "../components/FormsResister/validationError";
import { getAdminUser } from "../controllers/getadminusers";
import { authenticationStore, type AdminUserDetails } from "../store/adminstore";
import { Home } from "./home";
import logo from './../assets/logo.png'
import { useNavigate } from "react-router-dom";



export const Login = () => {
  const { add, adminDetails, deleteAdmin } = authenticationStore()
  const navigate = useNavigate()
  console.log(adminDetails)

  useEffect(() => {
    deleteAdmin()
  }, [])

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

    await getAdminUser(data).then((res) => {
      const dbData: AdminUserDetails = res.data
      const { adminName, adminEmail } = dbData
      add(adminName, adminEmail)
      navigate('/home')
    }
    )
      .catch((error) => { throw new Error(error) })
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

  if (adminDetails?.adminName) {
    return <Home />
  }


  return (
    <>


      <section className=" w-full h-full grid place-content-center px-4 pt-8">

        <header className="flex h-24 flex-col gap-4">
          <figure>
            <img src={logo} alt="" className="w-[128px]" />
          </figure>
          <section className="flex flex-col gap-[4px]">
            <h2 className="font-bold text-[16px] text-zinc-900">Acessar sua conta</h2>
            <p className="text-zinc-500 text-[14px]">Digite seu email e senha para acessar a plataforma.
            </p>
          </section>
        </header>
        <form action=""
          className="flex flex-col py-10 gap-4"
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

          <button className="px-2 py-2 bg-slate-600 rounded-sm" type="submit">
            Cadastrar
          </button>
        </form>
      </section>


    </>
  )
}