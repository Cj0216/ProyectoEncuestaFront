import { Navigate, Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useEffect } from "react"
const RutaAdmin = () => {
    const { auth, cargando } = useAuth()
    const rol = auth.rol
    const navigate = useNavigate()
    useEffect(() => {
        if (rol !== 1) {
            navigate("/foro")
            
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
                    <div className="flex">
                        <Sidebar/>


                        <main className="w-full">
                            <Outlet />
                        </main>
                    </div>
                </div>
            ) : <Navigate to="/" />}
        </>
    )
}

export default RutaAdmin