import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if (!token) {
                setCargando(false)
                return
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/perfil`
                const { data } = await axios(url, config)
                setAuth(data)
                if(data.rol===1){
                    navigate("/admin")
                }
                if (data.foro === 1) {
                    navigate("/encuesta")
                    return
                }
            } catch (error) {
                setAuth({})
            } finally {
                setCargando(false)
            }
        }
        autenticarUsuario()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                setAuth,
                auth,
                cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthProvider
}
export default AuthContext;