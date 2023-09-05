import { Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useEffect } from "react"
const AuthLayout = () => {
    
    const token = localStorage.getItem("token")

    
    const { auth,cargando } = useAuth() || {}
        const navigate = useNavigate()
    useEffect(() => {
        if (token) {
         navigate("/foro")
         
        }
    }, [])
    if (cargando) {
        return ("Cargando...")
    }
    return (
        <>
            <main className="container">
                <div className="md:w-2/3 lg:w-2/5">

                    <Outlet />
                </div>

            </main>
        </>
    )
}

export default AuthLayout