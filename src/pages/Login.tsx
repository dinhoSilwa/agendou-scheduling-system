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
import { Link, useNavigate } from "react-router-dom";
import { ButtonForms } from "../components/FormsResister/Button";
import { HeaderForms } from "../components/FormsResister/HeaderForms";



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

          <HeaderForms title="Acessar sua conta" subtitle="Digite seu email e senha para acessar a plataforma." />


        <form action=""
          className="flex flex-col py-10 gap-[32px]"
          onSubmit={handleSubmit(onSubmit)}
        >

          <section className="flex flex-col gap-2">

            <FieldSet
              labelDescription="*Email"
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
              labelDescription="*Senha"
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
          </section>

          <ButtonForms actiontext="Entrar" />
        </form>

        <section className="flex flex-col gap-[4px]">
          <p className="text-zinc-500 text-[14px] font-primary-outfit leading-[16px]">
            Ainda não tem login ? <Link to={"/cadastro"} title="link para área de Cadastro" role="cadastro" aria-label="link de Cadastro" className="font-bold">Cadastre-se</Link>
            </p>
        </section>
      </section>


    </>
  )
}