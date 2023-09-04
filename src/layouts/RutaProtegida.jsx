import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useState } from "react"


const RutaProtegida = () => {
    const {auth,cargando} = useAuth()

    const rol = auth.rol
    const active = rol ? "1" : ""

    if (cargando) {
        return("Cargando...")
    }

  return (
    <>
        {auth.id ? (
            <div className="bg-gray-100">
                <Header/>
                <div className={active ? "flex" : ""}>

                {rol === 1 && <Sidebar/>}

                <main className="w-full">
                    <Outlet/>
                </main>
                </div>
            </div>
        ) : <Navigate to="/" />}
    </>
  )
}

export default RutaProtegida