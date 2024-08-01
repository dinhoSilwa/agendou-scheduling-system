import React, { useState } from "react"
import { AdmUserProps } from "../../@types/globaltypes"
import { FieldSet } from "./fieldset"
import { businessTypes } from "../../models/businestypes"

const userRole = [
  { role: "Adiministrador" },
  { role: "Funcionário" },
]
export const FormRegister = () => {



  const [inputValue, setinputValue] = useState<AdmUserProps>({
    name: undefined,
    email: undefined,
    password: undefined,
    role: undefined,
    avatar: undefined,
    storename: undefined,
    storeType: undefined,
  })

  const handleForminput = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target
    const verifyName = businessTypes.some(({ type }) => type === value)
    const currentName = verifyName ? "storeType" : name

    setinputValue(prevState => ({

      ...prevState,
      [currentName]: value
    }))
  }

  const passwordConfirm = (pass: string) => {
    const OriginalPass = pass
    console.log(OriginalPass)
  }

console.log(inputValue)
  return (
    <>
      <form action="">

        <section className="bg-slate-200 px-2 py-8">
          <FieldSet
            labelDescription="Seu nome"
            inputType="text"
            currentValue={inputValue.name}
            currentName={"name"}
            currentId={"name"}
            currentPlaceHolder={"Digite seu nome"}
            handleForminput={handleForminput}
          />

          <FieldSet
            labelDescription="Seu Email"
            inputType="text"
            currentValue={inputValue.email || ''}
            currentName={"email"}
            currentId={"email"}
            currentPlaceHolder={"Digite seu email"}
            handleForminput={handleForminput}
          />

          <select name="role" id="role-selected" onChange={handleForminput}>
            {
              userRole.map(({ role }, index) => (
                <option key={index} value={role}>{role}</option>
              ))
            }
          </select>
        </section>

        <section className="bg-slate-200 px-2 py-8">


          <FieldSet
            labelDescription="Nome do negócio"
            inputType="text"
            currentValue={inputValue.storename || ""}
            currentName={"storename"}
            currentId={"storename"}
            currentPlaceHolder={"Digite o nome do negocio"}
            handleForminput={handleForminput}
          />

          <FieldSet
            labelDescription="Tipo de Negócios"
            inputType="text"
            currentValue={inputValue.storeType}
            currentName={"storeType"}
            currentId={"storeType"}
            currentPlaceHolder={"Digite o"}
            handleForminput={handleForminput}
            list="businessTypes"
          />

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
            currentName={"avatar"}
            currentId={"avatar"}
            handleForminput={handleForminput}

          />
        </section>



        <section className="bg-slate-200 px-2 py-8">
          <FieldSet
            labelDescription="Senha"
            inputType="password"
            currentName={"password1"}
            currentId={"password2"}
            currentPlaceHolder={"Crie uma senha"}
            handleForminput={passwordConfirm}
          />

          <FieldSet
            labelDescription="Confirmação"
            inputType="password"
            currentValue={inputValue.password || ""}
            currentName={"password"}
            currentId={"password"}
            currentPlaceHolder={"Crie uma senha"}
            handleForminput={handleForminput}
          />

          <button type="submit" className="px-2 py-2 text-white bg-slate-800">
            Finalizar Cadastro
          </button>
        </section>

        <section>
          <button type="button" className="px-2 py-1 bg-slate-200">{"anterios"}</button> <button type="button" className="px-2 py-1 bg-slate-200">{"Proxima"}</button>
        </section>


      </form>



    </>
  )
}