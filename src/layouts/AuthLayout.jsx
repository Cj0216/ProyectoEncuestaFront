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
                <div className="">

                    <Outlet />
                </div>

            </main>
        </>
    )
}

export default AuthLayout