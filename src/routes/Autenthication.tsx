import { Login } from "../pages/Login"
import { Sing } from "../pages/Singin"
import { authenticationStore } from "../store/adminstore"

export const Auth = () =>{
  const { adminDetails} = authenticationStore()

  return(
  <>
    {
      adminDetails?.adminName === null  ? <Sing /> : <Login />
    }
  </>
  )
}