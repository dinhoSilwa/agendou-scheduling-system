import React, { useState } from "react"
import { AdmUserProps } from "../../@types/globaltypes"
import { FieldSet } from "./fieldset"
import { businessTypes } from "../../models/businestypes"
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { validStoreTypes } from "../../models/formodels";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorField } from "./validationError";
import clsx from "clsx";



export const FormRegister = () => {

  const formsShemaValidations = Yup.object().shape({
    name: Yup.string().required("Digite o seu nome"),
    email: Yup.string().email("Digite um Email válido").required("Digite um Email"),
    password: Yup.string().required("Digite a sua Senha de Acesso"),
    phone : Yup.string().required("Digite o número do Telefone"),
    // role: Yup.string().oneOf(validRoles, "Adicione um Perfill").required("Selecione uma opção"),
    avatar: Yup.string().required("Adicione uma Imagem Válida"),
    storename: Yup.string().required("Adicione uma"),
    storeType: Yup.string().oneOf(validStoreTypes, "Adicione um Tipo de Negócios").required("Selecione o tipo")
  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(formsShemaValidations)

  })


  const [inputValue, setinputValue] = useState<AdmUserProps>({
    name: undefined,
    email: undefined,
    phone : undefined,
    password: undefined,
    // role: undefined,
    avatar: undefined,
    storename: undefined,
    storeType: undefined,
  })

  const handleForminput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const { name, value } = e.target
    const verifyName = businessTypes.some(({ type }) => type === value)
    const currentName = verifyName ? "storeType" : name

    setinputValue(prevState => ({

      ...prevState,
      [currentName]: value
    }))
  }

  const passwordConfirm = (pass: React.ChangeEvent) => {
    const OriginalPass = pass
    console.log(OriginalPass)
  }

  const onSubmit = (data: any) => {
    console.log(data)

  }

  const buttonSteps = [
    {step : 1, name : 'Dados Pessoais'}, 
    {step : 2, name : 'Seu Negócio'}, 
    {step : 3, name : 'Dados de Acesso'}, 
  ]


  const [currentGroup, setcurrentGroup] = useState(1)
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {currentGroup}

    <div className="flex gap-2">
    {
          buttonSteps.map(({name, step}, index) =>(
            <button type="button" key={index} className="p-2 bg-green-300 text-green-950"
            onClick={()=>setcurrentGroup(step)}
            >{name}</button>
          ))
        }
    </div>

        <section className={clsx("bg-slate-200 px-2 py-8", {'hidden' : currentGroup !== 1})}>
          <FieldSet
            labelDescription="Seu nome"
            inputType="text"
            currentValue={inputValue.name}
            //currentName={"name"}
            currentId={"name"}
            currentPlaceHolder={"Digite seu nome"}
            register={register}
            handleForminput={handleForminput}
          />


          {
            errors.name && <ErrorField>
              {errors.name.message}
            </ErrorField>
          }


          <FieldSet
            labelDescription="Adicione um Email"
            inputType="text"
            currentValue={inputValue.email || ''}
            //currentName={"email"}
            currentId={"email"}
            currentPlaceHolder={"Email"}
            handleForminput={handleForminput}
            register={register}
          />
          {
            errors.email && <ErrorField>
              {errors.email.message}
            </ErrorField>
          }

<FieldSet
            labelDescription="Adicione um Telefone"
            inputType="text"
            currentValue={inputValue.phone || ''}
            //currentName={"phone"}
            currentId={"phone"}
            currentPlaceHolder={"Telefone"}
            handleForminput={handleForminput}
            register={register}
          />
          {
            errors.phone && <ErrorField>
              {errors.phone.message}
            </ErrorField>
          }



{/* 
          <select
            id="role-selected"
            {...register('role')}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              register('role').onChange(e)
              handleForminput(e)
            }}>
            {
              userRole.map(({ role }, index) => (
                <option key={index} value={role}>{role}</option>
              ))
            }
          </select>

          {
            errors.role && <ErrorField>
              {errors.role.message}
            </ErrorField> }*/}
          

        </section>

        <section className={clsx("bg-slate-200 px-2 py-8", {'hidden' : currentGroup !== 2})}>


          <FieldSet
            labelDescription="Nome do negócio"
            inputType="text"
            currentValue={inputValue.storename || ""}
            //currentName={"storename"}
            currentId={"storename"}
            currentPlaceHolder={"Digite o nome do negocio"}
            handleForminput={handleForminput}
            register={register}
          />

          {
            errors.storename && <ErrorField>
              {errors.storename.message}
            </ErrorField>
          }



          <FieldSet
            labelDescription="Tipo de Negócios"
            inputType="text"
            currentValue={inputValue.storeType}
            //currentName={"storeType"}
            currentId={"storeType"}
            currentPlaceHolder={"Digite o"}
            handleForminput={handleForminput}
            list="businessTypes"
            register={register}

          />


          {
            errors.storeType && <ErrorField>
              {errors.storeType.message}
            </ErrorField>
          }

          <datalist id="businessTypes">

            {
              businessTypes.map(({ type }, index) => (
                <option value={type} key={index} />
              ))
            }

          </datalist>

          <FieldSet
            labelDescription="Seu Logo"
            inputType="file"
            currentValue={inputValue.avatar}
            //currentName={"avatar"}
            currentId={"avatar"}
            handleForminput={handleForminput}
            register={register}
          />


          {
            errors.avatar && <ErrorField>
              {errors.avatar.message}
            </ErrorField>
          }

        </section>



        <section className={clsx("bg-slate-200 px-2 py-8", {'hidden' : currentGroup !== 3})}>
          <FieldSet
            labelDescription="Senha"
            inputType="password"
            //currentName={"password1"}
            currentId={"password"}
            currentPlaceHolder={"Crie uma senha"}
            handleForminput={passwordConfirm}
            register={register}

          />


          {
            errors.password && <ErrorField>
              {errors.password.message}
            </ErrorField>
          }




          <button type="submit" className="px-2 py-2 text-white bg-slate-800">
            Finalizar Cadastro
          </button>
        </section>


      </form>


    </>
  )
}