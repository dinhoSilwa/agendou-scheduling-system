import { Navigate, Outlet } from "react-router-dom"
import { authenticationStore } from "../store/adminstore"

export const ProtectedRoute = () =>{
  const { adminDetails} = authenticationStore()

  return(
  <>
    {
      adminDetails ? <Outlet /> : <Navigate to={'/home'} />
    }
  </>
  )
}