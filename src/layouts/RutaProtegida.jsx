import { Navigate, Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react"


const RutaProtegida = () => {
    const { auth, cargando } = useAuth()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/")

        }
        if (auth.rol == 1) {
            navigate("/admin")

        }
    }, [])
    if (cargando) {
        return ("Cargando...")
    }


    return (
        <>
            {auth.id ? (
                <div className="bg-gray-100">
                    <Header />

                    <main className="w-full">
                        <Outlet />
                    </main>

                </div>
            ) : <Navigate to="/" />}
        </>
    )
}

export default RutaProtegida